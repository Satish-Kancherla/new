"use server";

import prisma from "@/lib/prisma";
import { Problem, ClinicalNote, Treatment } from "@/types/problem";

export async function createProblem(data: { note: string; medicalRecordId: string }): Promise<Problem> {
    return prisma.problem.create({
        data,
        include: {
            clinicalNotes: true,
            treatments: true,
        },
    });
}

export async function updateProblem(id: string, data: { note?: string }): Promise<Problem> {
    return prisma.problem.update({
        where: { id },
        data,
        include: {
            clinicalNotes: true,
            treatments: true,
        },
    });
}

export async function deleteProblem(id: string): Promise<void> {
    await prisma.problem.delete({ where: { id } });
}

export async function createClinicalNote(problemId: string, data: { note: string }): Promise<ClinicalNote> {
    return prisma.clinicalNote.create({
        data: { ...data, problemId },
    });
}

export async function updateClinicalNote(id: string, data: { note: string }): Promise<ClinicalNote> {
    return prisma.clinicalNote.update({ where: { id }, data });
}

export async function deleteClinicalNote(id: string): Promise<void> {
    await prisma.clinicalNote.delete({ where: { id } });
}

export async function createTreatment(problemId: string, data: { note: string }): Promise<Treatment> {
    return prisma.treatment.create({
        data: { ...data, problemId },
    });
}

export async function updateTreatment(id: string, data: { note: string }): Promise<Treatment> {
    return prisma.treatment.update({ where: { id }, data });
}

export async function deleteTreatment(id: string): Promise<void> {
    await prisma.treatment.delete({ where: { id } });
}

export async function cleanProblem(id: string): Promise<void> {
    const res = await prisma.medicalRecord.findUnique({
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
    const problems = res?.problems;
    if (problems) {
        problems.map((problem) => {
            problem.clinicalNotes.map((cn) => {
                if (cn.note.trim() === "") {
                    deleteClinicalNote(cn.id);
                }
            });
            problem.treatments.map((t) => {
                if (t.note.trim() === "") {
                    deleteTreatment(t.id);
                }
            });
            if (problem.clinicalNotes.length === 0 || problem.treatments.length === 0) {
                if (problem.note.trim() === "") {
                    deleteProblem(problem.id);
                }
            }
        });
    }
}
