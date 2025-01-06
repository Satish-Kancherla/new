import PatientList from '../comp/PatientList'

export default function PatientsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Patient List</h1>
      <PatientList />
    </div>
  )
}

