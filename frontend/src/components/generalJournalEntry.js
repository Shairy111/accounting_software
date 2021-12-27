import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function GeneralJournalEntry({
  date,
  debitAc,
  debitAmount,
  creditAc,
  creditAmount,
}) {
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
          borderColor: "primary.dark",
          marginTop: "0.5em",
          padding: "0.5em",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <Grid item>
            <Typography>{date}</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start">
              <Grid item>
                <Typography>{debitAc}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ marginLeft: "2em" }}>{creditAc}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{debitAmount}</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ marginTop: "2em" }}>{creditAmount}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default GeneralJournalEntry;
