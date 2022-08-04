import GenericDashboardContainer from "../../Dashboard/GenericDashboardContainer";
import * as React from "react";
import {PorterActivePatients} from "../../PatientRecord/PatientRecordPorter";
import Box from "@mui/material/Box";


export default function ActiveJobs( { recordData } ) {
    return (
        <GenericDashboardContainer>

            <h2>Active Jobs</h2>

            <JobList recordData={recordData}/>

        </GenericDashboardContainer>
    )
}

const JobList = ( { recordData } ) => {
    return (
        <Box>

            {recordData.records.map((v) =>
                <PorterActivePatients recordData={v}/>
            )}

        </Box>
    )
}