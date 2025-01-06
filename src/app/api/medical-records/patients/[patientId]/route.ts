import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ patientId: string }> }
) {
  try {
    const patientId = (await params).patientId

    const record = await prisma.medicalRecord.findUnique({
      where: { patientId }
    })

    if (!record) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(record)
  } catch (error) {
    console.error('Error searching for patient:', error)
    return NextResponse.json(
      { error: 'Failed to search for patient' },
      { status: 500 }
    )
  }
}

