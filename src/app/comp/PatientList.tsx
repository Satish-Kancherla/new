"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";


interface Patient {
    id: string;
    patientId: string;
    patientName: string;
    reference: string;
    caseType: string;
}

export default function PatientList() {
    const router = useRouter();
    const [searchId, setSearchId] = useState("");
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

    useEffect(() => {
        fetchPatients(searchId);
    }, [searchId]); // Refetch patients whenever searchId changes

    const fetchPatients = async (id?: string) => {
        let url = "/api/medical-records";
        if (id) {
            url += `?id=${id}`;
        }
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch patients");
            }
            const data = await response.json();
            setPatients(data);
            setError(null);
        } catch (err) {
            setError("Failed to load patients");
        } finally {
            setLoading(false);
        }
    };

    const handleOp = (id: string) => {
        router.push(`/medical-records/${id}`);
    };

    const handleView = (id: string) => {
        router.push(`/medical-records/view/${id}`);
    };

    const handleUpdate = (id: string) => {
        router.push(`/medical-records/update/${id}`);
    };

    const handleDelete = async (id: string) => {
        if (!selectedPatientId) return;
        try {
            const response = await fetch(`/api/medical-records/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                toast({
                    title: "Record Deleted successfully",
                    description: "",
                });
                fetchPatients();
            } else {
                toast({
                    title: "Failed to delete the record",
                    description: "",
                });
            }
        } catch (error) {
            console.error("Error deleting record:", error);
            toast({
                title: "Error",
                description: "An error occurred while deleting the record.",
            });
        } finally {
            setSelectedPatientId(null); // Reset selected patient after operation
        }
    };

    if (loading && !patients.length) {
        return (
            <div className="space-y-4">
                <div className="flex gap-4 mb-6">
                    <Skeleton className="h-10 w-[200px]" />
                    <Skeleton className="h-10 w-[100px]" />
                </div>
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full" />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Input placeholder="Search by Patient ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} className="w-full sm:max-w-[200px]" />
            </div>

            {error ? (
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            ) : (
                <div className="overflow-x-auto border border-gray-300  shadow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold">Patient ID</TableHead>
                                <TableHead className="font-semibold">Patient Name</TableHead>
                                <TableHead className="font-semibold">Reference</TableHead>
                                <TableHead className="font-semibold">Case Type</TableHead>
                                <TableHead className="font-semibold">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patients.map((patient) => (
                                <TableRow key={patient.id} className="hover:bg-accent/50 cursor-pointer transition-colors capitalize">
                                    <TableCell>{patient.patientId}</TableCell>
                                    <TableCell>{patient.patientName}</TableCell>
                                    <TableCell>{patient.reference}</TableCell>
                                    <TableCell>{patient.caseType}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Ellipsis className="cursor-pointer" />
                                                {/* <Menu className="cursor-pointer" /> */}
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {/* <DropdownMenuSeparator /> */}
                                                <DropdownMenuItem onClick={() => handleOp(patient.id)}>Op</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleView(patient.id)}>View</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleUpdate(patient.id)}>Update</DropdownMenuItem>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <DropdownMenuItem
                                                            onSelect={(e) => e.preventDefault()} // Prevent default close behavior
                                                            onClick={() => setSelectedPatientId(patient.id)}
                                                            className="text-red-500 focus:bg-red-500 focus:text-white"
                                                        >
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete the record.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() => handleDelete(patient.id)}
                                                                className="bg-red-500 hover:bg-red-600"
                                                            >
                                                                Yes, Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}

