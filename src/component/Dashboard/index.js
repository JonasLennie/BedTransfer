import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

import Copyright from "./Copyright";
import TopBar from "./TopBar";

const mdTheme = createTheme();

export default function DashboardTemplate(props) {
    return (
            <PageWrapper>
                <TopBar title={props.title} />
                <CssBaseline />
                <GridBox>
                    {props.children}
                </GridBox>
            </PageWrapper>
        )
}

const PageWrapper = (props) => {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                {props.children}
            </Box>
        </ThemeProvider>
    )
}

function GridBox( props ) {
    return (
        <BodyOfPage component="main">

            <Toolbar />

            <MainGridSection>
                {props.children}
            </MainGridSection>

        </BodyOfPage>
    )
}

const BodyOfPage = styled(Box) ({
    backgroundColor: (theme) =>
        theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
})

const MainGridSection = ( props ) => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container>
                {props.children}
            </Grid>

            <Copyright sx={{ pt: 4 }} />

        </Container>
    )
}
