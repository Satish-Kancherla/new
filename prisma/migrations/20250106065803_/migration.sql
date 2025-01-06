-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MedicalRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "regDate" TEXT NOT NULL,
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
INSERT INTO "new_MedicalRecord" ("age", "caseType", "clinicalNotes", "createdAt", "doctorName", "gender", "id", "patientId", "patientName", "phone", "problem", "pulse", "reference", "regDate", "temperature", "treatment", "updatedAt", "weight") SELECT "age", "caseType", "clinicalNotes", "createdAt", "doctorName", "gender", "id", "patientId", "patientName", "phone", "problem", "pulse", "reference", "regDate", "temperature", "treatment", "updatedAt", "weight" FROM "MedicalRecord";
DROP TABLE "MedicalRecord";
ALTER TABLE "new_MedicalRecord" RENAME TO "MedicalRecord";
CREATE UNIQUE INDEX "MedicalRecord_patientId_key" ON "MedicalRecord"("patientId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
