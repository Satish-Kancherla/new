"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useReactToPrint } from "react-to-print";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
interface MedicalRecordDisplayProps {
    id: string;
}

interface Problem {
    id: string;
    note: string;
    clinicalNotes: { id: string; note: string }[];
    treatments: { id: string; note: string }[];
}

interface ProblemsTableProps {
    problems: Problem[];
}

interface MedicalRecord {
    id: string;
    patientId: string;
    patientName: string;
    age: string;
    gender: string;
    reference: string;
    regDate: string;
    phone: string;
    weight: string;
    temperature: string;
    pulse: string;
    caseType: string;
    doctor: {
        name: string;
    };
    clinicalNotes: string;
    problems: Problem[];
    treatment: string;
}

export default function MedicalRecordDisplay({ id }: MedicalRecordDisplayProps) {
    const router = useRouter();
    const [record, setRecord] = useState<MedicalRecord | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef: ref });

    useEffect(() => {
        async function fetchRecord() {
            try {
                setLoading(true);
                const response = await fetch(`/api/medical-records/${id}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Medical record not found");
                    }
                    throw new Error("Failed to fetch medical record");
                }

                const data = await response.json();
                setRecord(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
                console.error("Error fetching record:", err);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchRecord();
        }
    }, [id]);

    if (loading) {
        return <LoadingSkeleton />;
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }

    if (!record) {
        return null;
    }

    return (
        <div className="page-container flex flex-col min-h-screen" ref={ref}>
            <Card className="max-w-[800px] w-full mx-auto bg-white">
                <div className="text-center justify-center border-b-2 border-gray-300 flex flex-col sm:flex-row items-center p-4 gap-4">
                    <img src="/logo1.jpeg" alt="Hospital Logo" className="w-20 h-20 sm:w-24 sm:h-24" />
                    <div className="text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl font-semibold">Sudheer Hospital And Neuro Center</h1>
                        {/* <p className="text-sm hidden sm:block">Infront of Arvind Kidney Center, Nellore</p>
            <p className="text-sm hidden sm:block">Phone: 9849518444 | Email: sudheerhospital@gmail.com</p> */}
                    </div>
                </div>

                {/* Doctors Information */}
                <div className="grid gap-4 text-sm p-4">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Left Side Doctors */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-base font-semibold">Dr.J.V.Rammohan</p>
                                <p>M.B.B.S, M.S</p>
                                <p>Senior General Surgeon</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold">Dr.M.Vani</p>
                                <p>M.B.B.S, D.G.O</p>
                                <p>Senior Gynaecologist</p>
                                <p>Reg.No. 16582</p>
                            </div>
                        </div>

                        {/* Right Side Doctors */}
                        <div className="space-y-4 text-right">
                            <div>
                                <p className="text-base font-semibold">Dr.J.V.V.N.Dheeraj</p>
                                <p>M.B.B.S, DNB</p>
                                <p>M.CH Neurosurgery</p>
                                <p>Reg.No. APMC/FMR102551</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold">Dr.G.Nagamanikyam</p>
                                <p>M.B.B.S, M.S, FMAS</p>
                                <p>General Surgeon</p>
                                <p>Reg.No. APMC/FMR112527</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Title */}
                <div className="text-center font-bold border-y-2 border-gray-300 py-2">OUT PATIENT ASSESSMENT RECORD</div>

                {/* Patient Details */}
                <div className="grid grid-cols-2 gap-4 p-4 text-sm">
                    <div className="grid grid-cols-2 gap-2 capitalize">
                        <div className="font-semibold">Patient Id</div>
                        <div>: {record.patientId}</div>
                        <div className="font-semibold">Patient Name</div>
                        <div>: {record.patientName}</div>
                        <div className="font-semibold">Age</div>
                        <div>: {record.age}</div>
                        {/* <div className="font-semibold">Gender</div>
            <div>: {record.gender}</div> */}
                        {/* <div className="font-semibold">Reference</div>
            <div>: {record.reference}</div> */}
                        <div className="font-semibold">Phone</div>
                        <div>: {record.phone}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 justify-self-center capitalize">
                        {/* <div className="font-semibold">Reg Date</div>
            <div>: {new Date(record.regDate).toLocaleDateString()}</div> */}
                        <div className="font-semibold">Weight</div>
                        <div>: {record.weight} kg</div>
                        <div className="font-semibold">Temperature</div>
                        <div>: {record.temperature} °C</div>
                        <div className="font-semibold">Pulse</div>
                        <div>: {record.pulse} bpm</div>
                        <div className="font-semibold">Case Type</div>
                        <div>: {record.caseType}</div>
                        <div className="font-semibold">Doctor</div>
                        <div>: {record.doctor.name}</div>
                    </div>
                </div>

                {/* Clinical Notes Section */}

                <div className="border-t-2 border-b-2">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/3 font-semibold text-zinc-900">Problems</TableHead>
                                <TableHead className="w-1/3 font-semibold text-zinc-900">Clinical Notes</TableHead>
                                <TableHead className="w-1/3 font-semibold text-zinc-900">Treatments</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {record.problems.map((problem) => (
                                <TableRow key={problem.id} className="">
                                    <TableCell className="align-top">
                                        <div className="whitespace-pre-line capitalize">{problem.note}</div>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        {problem.clinicalNotes.map((clinicalNote) => (
                                            <div key={clinicalNote.id} className="mb-2">
                                                <p className="whitespace-pre-line truncate capitalize">{clinicalNote.note}</p>
                                            </div>
                                        ))}
                                    </TableCell>
                                    <TableCell className="align-top">
                                        {problem.treatments.map((treatment) => (
                                            <div key={treatment.id} className="mb-2">
                                                <p className="whitespace-pre-line truncate capitalize">{treatment.note}</p>
                                            </div>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <footer className="border-t font-semibold border-gray-300 p-2 text-center">
                    <p className="text-sm">
                        In front of Arvind Kidney Center, Nakkalola Center, Brundhavanam, Nellore,Cell: 9849518444, 6301558446,Email: sudheerhospitalnln@gmail.com, Website: www.sudheerhospital.com
                    </p>
                    {/* <p className="text-sm">Cell: 9849518444, 6301558446</p> */}
                    {/* <p className="text-sm">Email: sudheerhospitalnln@gmail.com, Website: www.sudheerhospital.com</p> */}
                </footer>
            </Card>

            <div className="flex justify-center gap-4 my-4 print:hidden no-print navbar">
                <Button
                    onClick={() => {
                        reactToPrintFn();
                    }}
                    variant="default"
                    className="no-print navbar"
                >
                    Print Record
                </Button>
                <Button onClick={() => router.push("/patients")} variant="outline">
                    Back to List
                </Button>
            </div>
        </div>
    );
}

function LoadingSkeleton() {
    return (
        <div className="max-w-[800px] mx-auto space-y-4">
            <Skeleton className="h-24 w-full" />
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
                <div className="space-y-2">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
            </div>
            <Skeleton className="h-[400px] w-full" />
        </div>
    );
}
