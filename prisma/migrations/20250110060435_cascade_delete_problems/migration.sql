-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClinicalNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    CONSTRAINT "ClinicalNote_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ClinicalNote" ("id", "note", "problemId") SELECT "id", "note", "problemId" FROM "ClinicalNote";
DROP TABLE "ClinicalNote";
ALTER TABLE "new_ClinicalNote" RENAME TO "ClinicalNote";
CREATE TABLE "new_Treatment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    CONSTRAINT "Treatment_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Treatment" ("id", "note", "problemId") SELECT "id", "note", "problemId" FROM "Treatment";
DROP TABLE "Treatment";
ALTER TABLE "new_Treatment" RENAME TO "Treatment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
