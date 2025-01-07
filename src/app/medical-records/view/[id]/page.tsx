"use client"
import MedicalRecordForm from '@/app/comp/MedicalRecordForm'
import { SkipBack } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'

export default function MedicalRecordPage() {
  const params = useParams()
  return (
    <div className="container mx-auto py-6">
    
      <MedicalRecordForm id={params.id as string} />
    </div>
  )
}