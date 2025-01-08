import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
      const pcount = await prisma.medicalRecord.count()
      const rcount = await prisma.medicalRecord.count({
        where: {
          reference: {
            not: '',  // Count medical records where reference is not an empty string
          },
        },
      })
      return NextResponse.json({pcount,rcount})
    } catch (error) {
      console.error('Error fetching medical records:', error)
      return NextResponse.json(
        { error: 'Failed to fetch medical records' },
        { status: 500 }
      )
    }
  }