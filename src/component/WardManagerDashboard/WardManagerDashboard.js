import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Ward from "./Ward";
import Requests from "./Input";
import Output from "./Output";
import DashboardTemplate from "../Dashboard";

function DashboardContent() {
  return (
        <DashboardTemplate title={"Ward Manager - Dashboard"} >
              <Grid item xs={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Requests/>
                </Paper>
              </Grid>

              <Grid container item xs={6} spacing={2}>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Ward wardName="1"/>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Ward wardName="2"/>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Ward wardName="3"/>
                  </Paper>
                </Grid>

              </Grid>

              <Grid item xs={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Output/>
                </Paper>
              </Grid>

        </DashboardTemplate>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
