"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format, parseISO } from "date-fns";

export default function UpdatePatient() {
    const router = useRouter();
    const { id } = useParams();

    const [patient, setPatient] = useState({
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
        problem: "",
        clinicalNotes: "",
        treatment: "",
    });

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch(`/api/medical-records/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch patient data');
                }
                const data = await response.json();
                setPatient({
                    ...data,
                    regDate: format(parseISO(data.regDate), "yyyy-MM-dd"),
                });
            } catch (error) {
                console.error("Failed to fetch patient data:", error);
                // setError("Failed to load patient data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchPatient();
        }
    }, [id]);

    const handleUpdate = async () => {
        try {
            await fetch(`/api/medical-records/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(patient),
            })
            .then(() =>{
                router.push("/patients");
            });
            
        } catch (error) {
            console.error("Failed to update patient data:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    // const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log(format(e.target.value, "yyyy-MM-dd"));
    //     setPatient({ ...patient, [e.target.name]: format(e.target.value, "yyyy-MM-dd") });
    // };

    if (loading) {
        return <p>Loading...</p>; // Show loading indicator while fetching data
    }

    return (
        <div className="flex-1  justify-center items-center">
            <form className="space-y-4 my-5 max-w-xl mx-auto border border-gray-300 p-4 rounded-lg shadow">
            <h1 className="text-lg font-semibold flex justify-center">Update Patient Details</h1>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <Label htmlFor="patientName">Patient Name</Label>
                        <Input id="patientName" name="patientName" value={patient.patientName} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" name="age" value={patient.age} onChange={handleChange} required />
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
                        <Input id="phone" name="phone" value={patient.phone} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="weight">Weight</Label>
                        <Input id="weight" name="weight" value={patient.weight} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="temperature">Temperature</Label>
                        <Input id="temperature" name="temperature" value={patient.temperature} onChange={handleChange} required />
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
                        <Input id="doctorName" name="doctorName" value={patient.doctorName} onChange={handleChange} required />
                    </div>
                    <div className="col-span-2">
                        <Label htmlFor="problem">Problem</Label>
                        <Textarea id="problem" name="problem" value={patient.problem } onChange={handleChange} required />
                    </div>
                    <div className="col-span-2">
                        <Label htmlFor="clinicalNotes">Clinical Notes</Label>
                        <Textarea id="clinicalNotes" name="clinicalNotes" value={patient.clinicalNotes } onChange={handleChange}     />
                    </div>
                    <div className="col-span-2">
                        <Label htmlFor="treatment">Medication</Label>
                        <Textarea id="treatment" name="treatment" value={patient.treatment } onChange={handleChange}  />
                    </div>
                </div>
                <Button className="my-5 w-full" type="button" onClick={handleUpdate}>
                    Update
                </Button>
            </form>
        </div>
    );
}
