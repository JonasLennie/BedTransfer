import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function GenericDashboardContainer(props) {
        return (
            <StyledGrid item xs={6}>
                <StyledPaperContainer>
                    {props.children}
                </StyledPaperContainer>
            </StyledGrid>
        )
    }

    const StyledPaperContainer = styled(Paper) ({
        height: "100%",
        margin: 0,
        padding: 10,
        maxHeight: "80vh",
        overflow: "auto"
    })

    const StyledGrid = styled(Grid) ({
        paddingTop: 0,
        paddingLeft: 0
    })