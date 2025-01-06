'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function MedicalRecordForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    reference: '',
    regDate: '',
    phone: '',
    weight: '',
    temperature: '',
    pulse: '',
    caseType: '',
    doctorName: '',
    problem: '',
    clinicalNotes: '',
    treatment: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/medical-records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        router.push('/patients')
      } else {
        console.error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div>
        <Label htmlFor="patientName">Patient Name</Label>
        <Input id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input id="age" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Input id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="reference">Reference</Label>
        <Input id="reference" name="reference" value={formData.reference} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="regDate">Registration Date</Label>
        <Input id="regDate" name="regDate" type="date" value={formData.regDate} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="weight">Weight</Label>
        <Input id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="temperature">Temperature</Label>
        <Input id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="pulse">Pulse</Label>
        <Input id="pulse" name="pulse" value={formData.pulse} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="caseType">Case Type</Label>
        <Input id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="doctorName">Doctor Name</Label>
        <Input id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="problem">Problem</Label>
        <Textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="clinicalNotes">Clinical Notes</Label>
        <Textarea id="clinicalNotes" name="clinicalNotes" value={formData.clinicalNotes} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="treatment">Treatment</Label>
        <Textarea id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

