import GenericDashboardContainer from "../../Dashboard/GenericDashboardContainer";
import * as React from "react";
import {PorterNewPatients} from "../../PatientRecord/PatientRecordPorter";
import Box from "@mui/material/Box";

export default function PendingJobs( {recordData} ) {
    return (
        <GenericDashboardContainer>
            <h2>Incoming Jobs</h2>

            <JobBox recordData={recordData} />
        </GenericDashboardContainer>
    )
}

const JobBox = ( { recordData } ) => {
    return (
        <Box>
            {recordData.records.map((v) =>
                <PorterNewPatients recordData={v}/>
            )}
        </Box>
    )
}