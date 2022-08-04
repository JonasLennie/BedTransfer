import {styled} from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CardHeader} from "@mui/material";

export function ClinicianRequest ({ recordData }) {
    return (
        <BasicRequest recordData={recordData} >
            <Typography>Ward: {recordData.ward}</Typography>
            <Typography>Urgency: {recordData.severity}</Typography>
        </BasicRequest>
    )
}

export function PorterRequest ( { recordData } ) {
    return (
        <BasicRequest recordData={recordData} >
            <Typography>From: {recordData.wardFrom}</Typography>
            <Typography>To: {recordData.wardTo}</Typography>
        </BasicRequest>
        )
}

function BasicRequest ( props ) {
    return (
        <Index>
            <StyledHeader name={props.recordData.requester.name} />
            <BoldTypo>MRN: {props.recordData.mrn}</BoldTypo>
            {props.children}
        </Index>
    )
}

const StyledHeader = ( { name } ) => {

    return (
        <CardHeader
            titleTypographyProps={{
                color: "#8B8B8B",
                fontSize: "100%"
            }}

            style={{
                margin: 0,
                padding: 0
            }}

            title={name}
        />
    )
}

const Index = styled(CardContent)({
    flexGrow: 5
})

const BoldTypo = styled(Typography)({
    fontWeight: "bold"
})