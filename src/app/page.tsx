// import Dashboard from "./dashboard/page";

import PatientList from "./comp/PatientList";

export default function Home() {
    return (
        <div className="container mx-auto p-4">
           
            {/* <Dashboard /> */}
            <PatientList />
        </div>
    );
}
