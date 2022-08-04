import * as React from "react";

import Notes from "./Notes";
import { AlertDetails, NestedAlert } from "./styledComponents";
import AlertIcon from "./Alerts/ClinicianAlerts";
import {PorterActivePatientsAlerts, PorterNewPatientsAlerts} from "./Alerts/PorterAlerts";


export default function NotesAlerts({ recordData } ) {
    return (
        <DefaultNotesAlerts recordData={recordData}>
                <AlertIcon recordData={recordData} sx={{margin: "auto" }}/>
        </DefaultNotesAlerts>
    )
}

export function PorterActiveNotesAlerts({ recordData } ) {
    return (
        <DefaultNotesAlerts recordData={recordData}>
            <PorterActivePatientsAlerts recordData={recordData} sx={{margin: "auto" }}/>
        </DefaultNotesAlerts>
    )
}

export function PorterNewPatientsNotesAlerts({ recordData } ) {
    return (
        <DefaultNotesAlerts recordData={recordData}>
            <PorterNewPatientsAlerts recordData={recordData} sx={{margin: "auto" }}/>
        </DefaultNotesAlerts>
    )
}

const DefaultNotesAlerts = (props) => {
    return (
        <AlertDetails>
            <NestedAlert>
                {props.children}
                <Notes sx={{ margin: "auto" }} recordData={props.recordData} />
            </NestedAlert>
        </AlertDetails>
        )
}

