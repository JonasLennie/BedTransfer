import Box from '@mui/material/Box';
import {MRNTextField, Notes, SeveritySelection, SubmitRequest, WardSelection} from "./formElems";
import * as React from "react";

export default function NewRequest() {
    return <Box
        component={"form"}
        autoComplete={"off"}>

        <h2>Create A new bed request</h2>


        <MRNTextField/>

        <SeveritySelection sx={{margin : 100}}/>

        <WardSelection sx={{margin : 100}}/>

        <Notes/>

        <SubmitRequest/>
    </Box>
}
