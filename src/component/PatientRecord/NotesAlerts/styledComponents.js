import * as React from "react";
import {styled} from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export const AlertDetails = styled(CardContent)({
    flexGrow: 1,
})

export const NestedAlert = styled(CardContent,)({
    display: "flex",
    flexDirection: "column"
})