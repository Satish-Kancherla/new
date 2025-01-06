"use client"
import { useParams } from 'next/navigation';
import MedicalRecordDisplay from '../../comp/MedicalRecordDisplay'

export default function MedicalRecordPage( ) {
  const params = useParams();
  return (
    <div className="container mx-auto py-6">
      <MedicalRecordDisplay id={params.id as string} />
    </div>
  )
}

