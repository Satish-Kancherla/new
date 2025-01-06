"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

// Define Zod Schema for Validation
const patientFormSchema = z.object({
    patientName: z.string().min(1, "Patient Name is required"),
    age: z.string().regex(/^\d+$/, "Age must be a number"),
    gender: z.string().min(1, "Gender is required"),
    reference: z.string().min(1, "Reference is required"),
    regDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    weight: z.string().regex(/^\d+$/, "Weight must be a number"),
    temperature: z.string().regex(/^\d+(\.\d+)?$/, "Temperature must be a number"),
    pulse: z.string().regex(/^\d+$/, "Pulse must be a number"),
    caseType: z.string().min(1, "Case Type is required"),
    doctorName: z.string().min(1, "Doctor Name is required"),
    problem: z.string().min(1, "Problem is required"),
    //   clinicalNotes: z.string().min(1, "Clinical Notes are required"),
    //   treatment: z.string().min(1, "Treatment details are required"),
});

// Define TypeScript type from Zod Schema
type PatientFormData = z.infer<typeof patientFormSchema>;

export default function PatientForm() {
    const router = useRouter();

    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PatientFormData>({
        resolver: zodResolver(patientFormSchema),
    });

    const onSubmit = async (formData: PatientFormData) => {
        console.log("Form data:", formData);
        try {
            await axios
                .post("/api/medical-records", formData)

                .then((response) => {
                    console.log("Record created successfully");
                    console.log(response.data);
                    // router.push(`/medical-records/${response.data.id}`);

                    toast({
                        title: "Record created successfully",
                        description: "",
                        action: <ToastAction onClick={() => (router.push(`/medical-records/${response.data.id}`))} altText="Show">Show</ToastAction>
                    });
                    reset();
                })

                .catch((error) => {
                    console.error("Error creating record:", error);
                });
        } catch (error: any) {
            console.error("Error:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto border border-gray-300 p-4 rounded-lg shadow">
            <div className="flex justify-center mb-5">
                <h1 className="font-semibold text-xl">Patient Form</h1>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
                {/* Patient Name */}
                <div>
                    <Label htmlFor="patientName">Patient Name</Label>
                    <Input id="patientName" {...register("patientName")} />
                    {errors.patientName && <p className="text-red-500">{errors.patientName.message}</p>}
                </div>

                {/* Age */}
                <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" {...register("age")} />
                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>

                {/* Gender */}
                <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="gender">
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>

                {/* Reference */}
                <div>
                    <Label htmlFor="reference">Reference</Label>
                    <Input id="reference" {...register("reference")} />
                    {errors.reference && <p className="text-red-500">{errors.reference.message}</p>}
                </div>

                {/* Registration Date */}
                <div>
                    <Label htmlFor="regDate">Registration Date</Label>
                    <Input id="regDate" type="date" {...register("regDate")} />
                    {errors.regDate && <p className="text-red-500">{errors.regDate.message}</p>}
                </div>

                {/* Phone */}
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Weight */}
                <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" {...register("weight")} />
                    {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}
                </div>

                {/* Temperature */}
                <div>
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input id="temperature" {...register("temperature")} />
                    {errors.temperature && <p className="text-red-500">{errors.temperature.message}</p>}
                </div>

                {/* Pulse */}
                <div>
                    <Label htmlFor="pulse">Pulse (bpm)</Label>
                    <Input id="pulse" {...register("pulse")} />
                    {errors.pulse && <p className="text-red-500">{errors.pulse.message}</p>}
                </div>

                {/* Case Type */}
                <div>
                    <Label htmlFor="caseType">Case Type</Label>
                    <Controller
                        name="caseType"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="caseType">
                                    <SelectValue placeholder="Select case type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="emergency">Emergency</SelectItem>
                                    <SelectItem value="routine">Routine</SelectItem>
                                    <SelectItem value="followUp">Follow-up</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.caseType && <p className="text-red-500">{errors.caseType.message}</p>}
                </div>

                {/* Doctor Name */}
                <div>
                    <Label htmlFor="doctorName">Doctor Name</Label>
                    <Input id="doctorName" {...register("doctorName")} />
                    {errors.doctorName && <p className="text-red-500">{errors.doctorName.message}</p>}
                </div>

                {/* Problem */}
                <div className="col-span-2">
                    <Label htmlFor="problem">Problem</Label>
                    <Textarea id="problem" {...register("problem")} />
                    {errors.problem && <p className="text-red-500">{errors.problem.message}</p>}
                </div>

                {/* Clinical Notes */}
                {/* <div className="col-span-2">
          <Label htmlFor="clinicalNotes">Clinical Notes</Label>
          <Textarea id="clinicalNotes" {...register("clinicalNotes")} />
          {errors.clinicalNotes && <p className="text-red-500">{errors.clinicalNotes.message}</p>}
        </div> */}

                {/* Treatment */}
                {/* <div className="col-span-2">
          <Label htmlFor="treatment">Treatment</Label>
          <Textarea id="treatment" {...register("treatment")} />
          {errors.treatment && <p className="text-red-500">{errors.treatment.message}</p>}
        </div>*/}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );
}
