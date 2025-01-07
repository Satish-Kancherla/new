"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format, parseISO } from "date-fns";
import ProblemManager from "@/components/ProblemManager";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

interface Patient {
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
    doctorName: string;
    problems: any;
}

const defaultPatient: Patient = {
    patientName: "",
    age: "",
    gender: "",
    reference: "",
    regDate: "",
    phone: "",
    weight: "",
    temperature: "",
    pulse: "",
    caseType: "",
    doctorName: "",
    problems: [],
};

export default function UpdatePatient() {
    const router = useRouter();
    const { id } = useParams();

    const [patient, setPatient] = useState<Patient>(defaultPatient);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [doctors, setDoctors] = useState<[{ name: string }] | []>([]);
    const fetchDoctors = async () => {
        await axios
            .get("/api/doctors")
            .then((response) => {
                setDoctors(response.data.data);
            })
            .catch((error) => {
                console.log("error fetching docs", error);
            });
    };
    useEffect(() => {
        fetchDoctors();
    }, []);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch(`/api/medical-records/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch patient data");
                }
                const data = await response.json();
                console.log(data);

                setPatient({
                    ...defaultPatient,
                    ...data,
                    regDate: data.regDate ? format(parseISO(data.regDate), "yyyy-MM-dd") : "",
                    doctorName: data.doctor.name,
                    reference: data.reference || "",
                });
            } catch (error) {
                console.error("Failed to fetch patient data:", error);
                setError("Failed to load patient data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchPatient();
        }
    }, [id]);

    const handleUpdate = async () => {
        console.log(patient);
        
        try {
            const response = await fetch(`/api/medical-records/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(patient),
            });
            if (!response.ok) {
                throw new Error("Failed to update patient data");
            }
            router.push("/patients");
        } catch (error) {
            console.error("Failed to update patient data:", error);
            setError("Failed to update patient data. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPatient((prev) => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <Card className="m-4 max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Update Patient Details</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label htmlFor="patientName">Patient Name</Label>
                            <Input id="patientName" name="patientName" value={patient.patientName} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="age">Age</Label>
                            <Input id="age" type="number" name="age" value={patient.age} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="gender">Gender</Label>
                            <Input id="gender" name="gender" value={patient.gender} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="reference">Reference</Label>
                            <Input id="reference" name="reference" value={patient.reference} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="regDate">Registration Date</Label>
                            <Input id="regDate" name="regDate" type="date" value={patient.regDate} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" name="phone" value={patient.phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="weight">Weight</Label>
                            <Input id="weight" type="number" name="weight" value={patient.weight} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="temperature">Temperature</Label>
                            <Input id="temperature" type="number" name="temperature" value={patient.temperature} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="pulse">Pulse</Label>
                            <Input id="pulse" name="pulse" value={patient.pulse} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="caseType">Case Type</Label>
                            <Input id="caseType" name="caseType" value={patient.caseType} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="doctorName">Doctor Name</Label>
                            <Input id="doctorName" name="doctorName" list="doctorName-list" value={patient.doctorName} onChange={handleChange} required />
                            <datalist id="doctorName-list">
                                {doctors.map((doc, i) => (
                                    <option key={i}>{doc.name}</option>
                                ))}
                            </datalist>
                        </div>
                    </div>
                    <Button className="my-5 w-full bg-blue-500 hover:bg-blue-600" type="button" onClick={handleUpdate}>
                        Update
                    </Button>
                </form>
                <div className="col-span-2">
                    <ProblemManager medicalRecordId={id as string} initialProblems={patient.problems}/>
                </div>
            </CardContent>
        </Card>
    );
}
