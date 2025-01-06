'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { format, parseISO } from 'date-fns'

interface MedicalRecordDisplayProps {
  id: string
}

interface MedicalRecord {
  id: string
  patientId: string
  patientName: string
  age: string
  gender: string
  reference: string
  regDate: string
  phone: string
  weight: string
  temperature: string
  pulse: string
  caseType: string
  doctorName: string
  problem: string
  clinicalNotes: string
  treatment: string
}

export default function MedicalRecordForm({ id }: MedicalRecordDisplayProps) {
  const router = useRouter()
  const [record, setRecord] = useState<MedicalRecord | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecord() {
      try {
        setLoading(true)
        const response = await fetch(`/api/medical-records/${id}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Medical record not found')
          }
          throw new Error('Failed to fetch medical record')
        }

        const data = await response.json()
        setRecord(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching record:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchRecord()
    }
  }, [id])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!record) {
    return null
  }

  return (
    <div className="page-container flex flex-col min-h-screen">
      <Card className="max-w-[800px] w-full mx-auto bg-white">
        <div className="text-center border-b-2 border-gray-300 flex items-center p-4">
          <div>
            <img src="/logo1.jpeg" alt="Hospital Logo" className="w-24 h-24 mb-2 ml-5" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Sudheer Hospital And Neuro Center</h1>
            {/* <p className="text-sm font-semibold">Infront of Arvind Kidney Center, Nakkalola Center, Brundhavanam, Nellore</p>
            <p className="text-sm font-semibold">
              Cell: 9849518444, 6301558446, Email: sudheerhospitalnln@gmail.com, Website: www.sudheerhospital.com
            </p> */}
          </div>
        </div>

        {/* Form Title */}
        <div className="text-center font-bold border-b-2 border-gray-300 py-2">
          PATIENT DETAILS [ {record.patientId} ]
        </div>

        {/* Patient Details */}
        <div className="grid grid-cols-2 gap-4 p-4 text-sm">
          <div className="grid grid-cols-2 gap-2 capitalize">
            <div className="font-semibold">Patient</div>
            <div>: {record.patientName}</div>
            <div className="font-semibold">Patient Id</div>
            <div>: {record.patientId}</div>
            <div className="font-semibold">Age</div>
            <div>: {record.age}</div>
            <div className="font-semibold">Gender</div>
            <div>: {record.gender}</div>
            <div className="font-semibold">Reference</div>
            <div>: {record.reference}</div>
            <div className="font-semibold">Phone</div>
            <div>: {record.phone}</div>
          </div>

          <div className="grid grid-cols-2 gap-2 capitalize">
            <div className="font-semibold">Reg Date</div>
            <div>: {format(parseISO(record.regDate), "dd-MM-yyyy")}</div>
            <div className="font-semibold">Weight</div>
            <div>: {record.weight} kg</div>
            <div className="font-semibold">Temperature</div>
            <div>: {record.temperature} °C</div>
            <div className="font-semibold">Pulse</div>
            <div>: {record.pulse} bpm</div>
            <div className="font-semibold">Case Type</div>
            <div>: {record.caseType}</div>
            <div className="font-semibold">Doctor</div>
            <div>: {record.doctorName}</div>
          </div>
        </div>

        {/* Clinical Notes Section */}
        <div className="border-t border-gray-300">
          <div className="grid grid-cols-3 border-b border-gray-300 ">
            <div className="p-2 font-semibold">Problem</div>
            <div className="p-2 font-semibold border-x border-gray-300">Clinical Notes</div>
            <div className="p-2 font-semibold">Medication</div>
          </div>
          <div className="grid grid-cols-3 min-h-[180px] h-[450px] capitalize">
            <div className="p-2 border-r border-gray-300">
              <p className="whitespace-pre-line">{record.problem}</p>
            </div>
            <div className="p-2 border-r border-gray-300">
              <p className=" whitespace-pre-line">{record.clinicalNotes}</p>
            </div>
            <div className="p-2">
              <p className="whitespace-pre-line">{record.treatment}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-center gap-4 my-4 print:hidden">
        <Button onClick={() => window.print()} variant="default">
          Print Record
        </Button>
        <Button onClick={() => router.push('/patients')} variant="outline">
          Back to List
        </Button>
      </div>
    </div>
  )
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
  )
}

