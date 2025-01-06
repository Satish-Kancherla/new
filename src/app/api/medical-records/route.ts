import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get("id");

    try {
        const records = await prisma.medicalRecord.findMany({
            where: patientId
                ? {
                      patientId: {
                          contains: patientId, // Partial matching
                      },
                  }
                : {},
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                patientId: true,
                patientName: true,
                reference: true,
                caseType: true,
            },
        });
        return NextResponse.json(records);
    } catch (error) {
        console.error("Error fetching medical records:", error);
        return NextResponse.json({ error: "Failed to fetch medical records" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Body:", body);

        const lastRecord = await prisma.medicalRecord.findFirst({
            orderBy: { patientId: "desc" },
        });

        const lastPatientId = lastRecord ? parseInt(lastRecord.patientId) : 99;
        const newPatientId = (lastPatientId + 1).toString().padStart(3, "0");

        const newRecord = await prisma.medicalRecord.create({
            data: {
                ...body,
                patientId: newPatientId,
               
            },
        });

        return NextResponse.json(newRecord, { status: 201 });
    } catch (error) {
        console.error("Error creating medical record:", error);
        return NextResponse.json({ error: "Failed to create medical record" }, { status: 500 });
    }
}


