import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const patientId = searchParams.get('patientId')

    if (!patientId) {
      return NextResponse.json(
        { error: 'Patient ID is required' },
        { status: 400 }
      )
    }

    const record = await prisma.medicalRecord.findFirst({
      where: { patientId }
    })

    if (!record) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      )
    }

    // Include the MongoDB _id field in the response
    return NextResponse.json({
      ...record,
      _id: record.id
    })
  } catch (error) {
    console.error('Error searching for patient:', error)
    return NextResponse.json(
      { error: 'Failed to search for patient' },
      { status: 500 }
    )
  }
}

