import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
      const records = await prisma.medicalRecord.findMany({
        orderBy: { createdAt: 'desc' }
      })
      return NextResponse.json(records)
    } catch (error) {
      console.error('Error fetching medical records:', error)
      return NextResponse.json(
        { error: 'Failed to fetch medical records' },
        { status: 500 }
      )
    }
  }

  
export async function POST(request: Request) {
    try {
      const body = await request.json()
      
      // Find the last record to generate the next patient ID
      const lastRecord = await prisma.medicalRecord.findFirst({
        orderBy: { patientId: 'desc' },
      })
      
      // Generate new patient ID starting from 100
      const lastPatientId = lastRecord ? parseInt(lastRecord.patientId) : 99
      const newPatientId = (lastPatientId + 1).toString().padStart(3, '0')
  
      const newRecord = await prisma.medicalRecord.create({
        data: {
          ...body,
          patientId: newPatientId,
          regDate: new Date(body.regDate),
        },
      })
  
      return NextResponse.json(newRecord, { status: 201 })
    } catch (error) {
      console.error('Error creating medical record:', error)
      return NextResponse.json(
        { error: 'Failed to create medical record' },
        { status: 500 }
      )
    }
  }
  

  
  