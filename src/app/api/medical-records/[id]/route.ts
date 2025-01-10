import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    try {
        const record = await prisma.medicalRecord.findUnique({
            where: { id },
            select: {
                id: true,
                patientId: true,
                patientName: true,
                age: true,
                gender: true,
                regDate: true,
                phone: true,
                weight: true,
                temperature: true,
                pulse: true,
                caseType: true,
                reference: true,
                doctor: true,
                problems: {
                    select: {
                        id: true,
                        note: true,
                        clinicalNotes: true,
                        treatments: true,
                        medicalRecordId: true,
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

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    let body;
    try {
        body = await request.json();
        console.log(body, "1");
    } catch (error) {
        return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
        return NextResponse.json({ error: "Request body must be a valid JSON object" }, { status: 400 });
    }
    const { doctorName } = { ...body };
    const doctor = await prisma.doctor.findUnique({ where: { name: doctorName } });
    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;
    delete body.problems;
    delete body.refrence;
    delete body.doctorName;
    delete body.doctor;

    try {
        const updatedRecord = await prisma.medicalRecord.update({
            where: { id },
            data: {
                ...body,
                doctorId: doctor?.id,
            },
        });
        return NextResponse.json(updatedRecord);
    } catch (error) {
        console.error("Error updating record:", error);
        return NextResponse.json({ error: "Failed to update record" }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    try {
        // First, delete the clinical notes and treatments related to problems of the medical record
        await prisma.clinicalNote.deleteMany({
            where: {
                problem: {
                    medicalRecordId: id,
                },
            },
        });

        await prisma.treatment.deleteMany({
            where: {
                problem: {
                    medicalRecordId: id,
                },
            },
        });

        // Then, delete the problems related to the medical record
        await prisma.problem.deleteMany({
            where: {
                medicalRecordId: id,
            },
        });

        // Finally, delete the medical record itself
        await prisma.medicalRecord.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Record deleted successfully" });
    } catch (error) {
        console.error("Error deleting record:", error);
        return NextResponse.json({ error: "Failed to delete record" }, { status: 400 });
    }
}

