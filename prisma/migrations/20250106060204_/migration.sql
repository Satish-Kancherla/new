-- CreateTable
CREATE TABLE "MedicalRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "regDate" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "pulse" TEXT NOT NULL,
    "caseType" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "clinicalNotes" TEXT,
    "treatment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalRecord_patientId_key" ON "MedicalRecord"("patientId");
