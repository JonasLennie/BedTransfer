import * as React from 'react';

import ClinicianNotesAlerts from "./NotesAlerts";
import {ClinicianRequest} from "./Request";
import {ContainerCard} from "./styledComponents";

export default function PatientRecord({ recordData }) {
    return (
        <ContainerCard>
                <ClinicianRequest recordData={recordData} />
                <ClinicianNotesAlerts recordData={recordData} />
        </ContainerCard>
    );
}

