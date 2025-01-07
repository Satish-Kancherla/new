/*
  Warnings:

  - You are about to drop the column `clinicalNotes` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `doctorName` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `problem` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `treatment` on the `MedicalRecord` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Reference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "medicalRecordId" TEXT NOT NULL,
    CONSTRAINT "Problem_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ClinicalNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    CONSTRAINT "ClinicalNote_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Treatment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    CONSTRAINT "Treatment_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MedicalRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "regDate" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "pulse" TEXT NOT NULL,
    "caseType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "doctorId" TEXT,
    "referenceId" TEXT,
    CONSTRAINT "MedicalRecord_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MedicalRecord_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Reference" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MedicalRecord" ("age", "caseType", "createdAt", "gender", "id", "patientId", "patientName", "phone", "pulse", "regDate", "temperature", "updatedAt", "weight") SELECT "age", "caseType", "createdAt", "gender", "id", "patientId", "patientName", "phone", "pulse", "regDate", "temperature", "updatedAt", "weight" FROM "MedicalRecord";
DROP TABLE "MedicalRecord";
ALTER TABLE "new_MedicalRecord" RENAME TO "MedicalRecord";
CREATE UNIQUE INDEX "MedicalRecord_patientId_key" ON "MedicalRecord"("patientId");
CREATE UNIQUE INDEX "MedicalRecord_referenceId_key" ON "MedicalRecord"("referenceId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
