import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    try {
        const record = await prisma.medicalRecord.findUnique({
            where: { id },
            select: {
                problems: {
                    select: {
                        id: true,
                        note: true,
                        clinicalNotes: true,
                        treatments: true,
                        // medicalRecordId: true,
                    },
                },
            },
        });

        if (!record) {
            return NextResponse.json({ error: "Medical record not found" }, { status: 404 });
        }

        return NextResponse.json(record);
    } catch (error) {
        console.error("Error fetching medical record:", error);
        return NextResponse.json({ error: "Failed to fetch medical record" }, { status: 500 });
    }
}