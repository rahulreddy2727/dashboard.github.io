import { Grid } from "@material-ui/core";
import React from "react";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

export default function Body() {
  return (
    <>
      <Grid container spacing>
        <div>
          <h1>welcome back noha</h1>

          <Sidebar />

          <br />
        </div>

        <div>
          <Grid item xs={12} sm={10} md={4}>
            <Rightbar />
          </Grid>
        </div>
      </Grid>
    </>
  );
}
