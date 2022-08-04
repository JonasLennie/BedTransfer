import * as React from "react";
import {PorterRequest} from "./Request";
import {ContainerCard} from "./styledComponents";
import {PorterActiveNotesAlerts, PorterNewPatientsNotesAlerts} from "./NotesAlerts";

export function PorterActivePatients( { recordData } ) {
    return (
        <ContainerCard>
            <PorterRequest recordData={recordData}/>
            <PorterActiveNotesAlerts recordData={recordData} />
        </ContainerCard>
    )
}

export function PorterNewPatients( { recordData }) {
    return (
        <ContainerCard>
            <PorterRequest recordData={recordData} />
            <PorterNewPatientsNotesAlerts recordData={recordData} />
        </ContainerCard>
    )
}