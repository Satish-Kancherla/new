import PatientList from "../comp/PatientList";

export default function PatientsPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 md:text-left">Patient List</h1>
            <PatientList />
        </div>
    );
}
