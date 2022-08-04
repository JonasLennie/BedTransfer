import Box from "@mui/material/Box";
import * as React from "react";
import {AcceptIcon, AlertBox, CancelIcon, CompleteIcon, StyledTopo} from "./styledComponents";


export function PorterNewPatientsAlerts() {
    return (
        <AlertBox>
            <StyledTopo>Accept</StyledTopo>

            <AcceptIcon />
        </AlertBox>
    )
}

export function PorterActivePatientsAlerts() {
    return (
            <Box>
                <CompleteAlert />
                <CancelAlert />
            </Box>
        )
}



function CompleteAlert() {
    return (
        <AlertBox>
            <StyledTopo>Complete</StyledTopo>

            <CompleteIcon />
        </AlertBox>
    )
}

function CancelAlert() {
    return (
        <AlertBox>
            <StyledTopo>Cancel</StyledTopo>

            <CancelIcon />
        </AlertBox>
    )
}


