import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function TrialBalanceTitle({ title, description, date }) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <Typography sx={{ color: "white", fontWeight: "bold" }} variant="h5">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "white" }} variant="h6">
            {description}
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ color: "white" }} variant="p1">
            {date}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default TrialBalanceTitle;
