import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function GeneralJournalTitle() {
  return (
    <>
      {/* <Box
        sx={{
          width: 1000,
          height: 50,
          backgroundColor: "primary.light",
        }}>
       
      </Box> */}

      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "primary.light",
          marginTop: "0.5em",
          padding: "0.5em",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            <Typography sx={{ color: "white" }}>Date</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "white" }}>Account Name</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "white", marginLeft: "5em" }}>
              Debit
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "white" }}>Credit</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default GeneralJournalTitle;
