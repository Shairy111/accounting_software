import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LedgerBox({ title, debitAmount, creditAmount }) {
  const totalCalculator = (amountList) => {
    let total = 0;
    if (amountList === undefined) {
      return total;
    } else {
      for (let index in amountList) {
        total += parseInt(amountList[index]);
      }
      return total;
    }
  };
  return (
    <>
      {console.log(totalCalculator(500, 300))}
      <Paper sx={{ margin: "2em" }} variant="outlined">
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center">
          <Grid item>
            <Typography>{title}</Typography>
          </Grid>

          {/* body */}
          <Grid item>
            <Grid
              spacing={5}
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start">
              <Grid item>
                <Typography>Debit</Typography>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start">
                  {debitAmount &&
                    debitAmount.map((amount, i) => {
                      return (
                        <>
                          <Grid item>
                            <Typography key={i}>{amount}</Typography>
                          </Grid>
                        </>
                      );
                    })}

                  <Grid item>
                    {debitAmount !== undefined ? (
                      <Box
                        sx={{
                          marginTop: "1em",
                          width: "2.5em",
                          border: "1px solid grey",
                        }}></Box>
                    ) : null}
                  </Grid>
                  <Grid item>
                    <Typography>
                      {debitAmount !== undefined
                        ? `Total ${totalCalculator(debitAmount)}`
                        : null}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box
                  component="span"
                  sx={{ height: "2em", border: "1px dashed grey" }}></Box>
              </Grid>
              <Grid item>
                <Typography>Credit</Typography>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start">
                  {creditAmount &&
                    creditAmount.map((amount, i) => {
                      return (
                        <>
                          <Grid item>
                            <Typography key={i}>{amount}</Typography>
                          </Grid>
                        </>
                      );
                    })}

                  <Grid item>
                    {creditAmount !== undefined ? (
                      <Box
                        sx={{
                          marginTop: "1em",
                          width: "2.5em",
                          border: "1px solid grey",
                        }}></Box>
                    ) : null}
                  </Grid>
                  <Grid item>
                    <Typography>
                      {creditAmount !== undefined
                        ? `Total ${totalCalculator(creditAmount)}`
                        : null}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default LedgerBox;

//old logic
{
  /* <Grid item>
<Typography>Credit</Typography>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start">
  <Grid item>
    <Typography sx={{ marginBottom: "2em" }}>
      {creditAmount !== 0 ? creditAmount : null}
    </Typography>
  </Grid>
  <Grid item>
    {creditAmount !== 0 ? (
      <Box
        sx={{
          width: "2.5em",
          border: "1px solid grey",
        }}></Box>
    ) : null}
  </Grid>
  <Grid item>
    <Typography>
      {creditAmount !== 0 ? `Total ${creditAmount}` : null}
    </Typography>
  </Grid>
</Grid>
</Grid>
</Grid> */
}
