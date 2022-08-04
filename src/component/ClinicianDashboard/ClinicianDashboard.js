import * as React from "react";
import GenericDashboardContainer from "../Dashboard/GenericDashboardContainer"

import NewRequest from "./NewRequest";
import Dashboard from "../Dashboard";
import PatientRecord from "../PatientRecord/PatientRecordClinician";


const Sample = require('./SampleData.json')

export default function ClinicianDashboard() {
    return (
        <Dashboard title={"Clinician - Dashboard"}>

                <NewRequestBox />

                <PatientRecordOverview />

        </Dashboard>
    )
}

function NewRequestBox() {
    return (
        <GenericDashboardContainer>
            <NewRequest />
        </GenericDashboardContainer>
    )
}

function PatientRecordOverview() {
    return (
        <GenericDashboardContainer>
            <h2>Past Bed Requests</h2>

            {Sample.records.map((v) =>
                <PatientRecord recordData={v}/>
            )}
        </GenericDashboardContainer>
    )
}

