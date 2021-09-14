import React from "react";
import ProgressCard from "./ProgressCard";
import ProfileCard from "./ProfileCard";
import { Grid } from "@material-ui/core";
export default function Body() {
  return (
    <div>
      <div>
        <ProfileCard />
      </div>
      <br />
      <div>
        <Grid>
          <ProgressCard />
        </Grid>
      </div>
    </div>
  );
}
