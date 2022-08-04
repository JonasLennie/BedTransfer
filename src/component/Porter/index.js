import Dashboard from "../Dashboard";
import PendingJobs from "./PendingJobs";
import ActiveJobs from "./ActiveJobs";

const Sample2 = require('./SampleDataPorter.json')

export default function PorterDashboard() {
    return (
        <Dashboard title={"Porter - Dashboard"}>

            <PendingJobs recordData={Sample2} />

            <ActiveJobs recordData={Sample2} />

        </Dashboard>
    )
}


