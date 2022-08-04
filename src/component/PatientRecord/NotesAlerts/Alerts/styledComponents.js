import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MailIcon from "@mui/icons-material/Mail";
import {Cancel, CheckCircle} from "@mui/icons-material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


export const PendingAlertIcon = () => {
    return (
        <AccessTimeFilledIcon sx={{
            margin: "auto",
            color: "#FECB7F"
        }} />
    )
}

export const NewMessageAlertIcon = () => {
    return (
        <MailIcon sx={{
            margin: "auto",
            color: "#34BAF6"
        }} />
    )
}

export const AcceptedAlertIcon = () => {
    return (
        <CheckCircle sx={{
            margin: "auto",
            color: "#B7DFB8"
        }} />
    )
}

export const CanceledAlertIcon = () => {
    return (
        <Cancel sx={{
            margin: "auto",
            color: "#F16360"
        }} />
    )
}

export const CompleteIcon = () => {
    return (
        <StyledIconContainer>
            <CheckCircle sx={{
                margin: "auto",
                color: "#B7DFB8"
            }}
            />
        </StyledIconContainer>
    )
}

export const AcceptIcon = () => {
    return (
        <IconButton
            sx={{ margin: "auto" }}
        >
            <CheckCircle sx={{
                margin: "auto",
                color: "#B7DFB8"
            }}
            />
        </IconButton>
    )
}

export const CancelIcon = () => {
    return (
        <StyledIconContainer>
            <Cancel sx={{
                margin: "auto",
                color: "#F16360"
            }}
            />
        </StyledIconContainer>
    )
}

export const AlertBox = styled(Box) ({
    display: "flex",
    flexDirection: "row"
})

const StyledIconContainer = styled(IconButton) ({
    margin: "auto"
})

export const StyledTopo = styled(Typography) ({
    margin: "auto"
})
