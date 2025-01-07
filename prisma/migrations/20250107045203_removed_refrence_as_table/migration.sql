/*
  Warnings:

  - You are about to drop the `Reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `referenceId` on the `MedicalRecord` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Reference";
PRAGMA foreign_keys=on;

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
    CONSTRAINT "MedicalRecord_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MedicalRecord" ("age", "caseType", "createdAt", "doctorId", "gender", "id", "patientId", "patientName", "phone", "pulse", "regDate", "temperature", "updatedAt", "weight") SELECT "age", "caseType", "createdAt", "doctorId", "gender", "id", "patientId", "patientName", "phone", "pulse", "regDate", "temperature", "updatedAt", "weight" FROM "MedicalRecord";
DROP TABLE "MedicalRecord";
ALTER TABLE "new_MedicalRecord" RENAME TO "MedicalRecord";
CREATE UNIQUE INDEX "MedicalRecord_patientId_key" ON "MedicalRecord"("patientId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
