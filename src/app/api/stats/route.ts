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
      const referenceStats = await prisma.medicalRecord.groupBy({
        by: ["reference"],
        where: {
          reference: {
            not: "", // Only count non-empty references
          },
        },
        _count: {
          reference: true,
        },
      });
      return NextResponse.json({pcount,referenceStats,rcount})
    } catch (error) {
      console.error('Error fetching medical records:', error)
      return NextResponse.json(
        { error: 'Failed to fetch medical records' },
        { status: 500 }
      )
    }
  }