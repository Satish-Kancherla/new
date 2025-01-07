export interface ClinicalNote {
    id: string;
    note: string;
}

export interface Treatment {
    id: string;
    note: string;
}

export interface Problem {
    id: string;
    note: string;
    medicalRecordId: string;
    clinicalNotes: ClinicalNote[];
    treatments: Treatment[];
}
