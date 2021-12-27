import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrialBalanceTitle from "./trialBalanceTitle";
import axios from "axios";

function TrialBalance() {
  const [fetchedAssets, setfetchedAssets] = useState(undefined);
  const [data, setData] = useState(undefined);

  const fetchAssets = async () => {
    try {
      const result = await axios.get("http://localhost:1337/api/ledgers");
      const {
        data: { data },
      } = result;

      console.log("function executed");
      setfetchedAssets(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAssets();
  }, []);

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

  const dataArranger = () => {
    if (fetchedAssets !== undefined) {
      let debitData = [];
      let creditData = [];
      for (let index in fetchedAssets) {
        const debitTotal = totalCalculator(
          fetchedAssets[index].attributes.debit.amount
        );
        console.log(debitTotal);

        const creditTotal = totalCalculator(
          fetchedAssets[index].attributes.credit.amount
        );

        if (debitTotal > creditTotal) {
          let title = fetchedAssets[index].attributes.title;
          let amount = debitTotal - creditTotal;

          let data = { title: title, amount: amount };
          debitData.push(data);
        } else if (creditTotal > debitTotal) {
          let title = fetchedAssets[index].attributes.title;
          let amount = creditTotal - debitTotal;

          let data = { title: title, amount: amount };
          creditData.push(data);
        }
      }

      const data = { debitSide: debitData, creditSide: creditData };
      setData(data);
      return;
      // return { debitSide: debitData, creditSide: creditData };
    }
  };

  useEffect(() => {
    dataArranger();
  }, [fetchedAssets]);
  const title = (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 820,
          height: 90,
        },
      }}>
      <Paper sx={{ bgcolor: "primary.light" }} elevation={4}>
        <TrialBalanceTitle
          title="Over Night Auto Shop"
          description="Trial Balance"
          date="2-jan-2021"
        />
      </Paper>
    </Box>
  );

  const trialBalanceBody = (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 820,
        },
      }}>
      <Paper sx={{ bgcolor: "beige" }} elevation={4}>
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">
          {data !== undefined
            ? data.debitSide.map((element, i) => {
                // const { attributes } = element;
                console.log(element);

                return (
                  <>
                    <Grid item xs={6}>
                      <Typography>{element.title}.....</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ color: "red" }}>
                        Rs {element.amount}
                      </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </>
                );
              })
            : null}
        </Grid>

        {/* credit side */}
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">
          {data &&
            data.creditSide.map((element, i) => {
              // const { attributes } = element;
              console.log("credit", element);
              return (
                <>
                  <Grid item xs={6}>
                    <Typography>{element.title}.....</Typography>
                  </Grid>
                  <Grid item></Grid>
                  <Grid item>
                    {" "}
                    <Typography sx={{ color: "red" }}>
                      Rs {element.amount}
                    </Typography>
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Paper>
    </Box>
  );
  return (
    <>
      {/* {data &&
        data.debitSide.map((e) => {
          console.log(e);
        })} */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Grid item>{title}</Grid>
        <Grid item>{trialBalanceBody}</Grid>
      </Grid>
    </>
  );
}

export default TrialBalance;

//old logic

// const trialBalanceBody = (
//   <Box
//     sx={{
//       display: "flex",
//       flexWrap: "wrap",
//       "& > :not(style)": {
//         m: 1,
//         width: 820,
//       },
//     }}>
//     <Paper sx={{ bgcolor: "beige" }} elevation={4}>
//       <Grid
//         spacing={3}
//         container
//         direction="row"
//         justifyContent="space-around"
//         alignItems="flex-start">
//         {fetchedAssets !== undefined
//           ? fetchedAssets.map((element, i) => {
//               const {
//                 attributes: { debit, credit },
//               } = element;
//               console.log(debit[0].attributes);
//               return (
//                 <>
//                   <Grid item xs={6}>
//                     <Typography>{debit[0].attributes.title}.....</Typography>
//                   </Grid>
//                   <Grid item>
//                     <Typography sx={{ color: "red" }}>
//                       Rs {debit.amount}
//                     </Typography>
//                   </Grid>
//                   <Grid item></Grid>
//                 </>
//               );
//             })
//           : null}
//       </Grid>

//       {/* credit side */}
//       <Grid
//         spacing={3}
//         container
//         direction="row"
//         justifyContent="space-around"
//         alignItems="flex-start">
//         {fetchedAssets !== undefined
//           ? fetchedAssets.map((element, i) => {
//               const {
//                 attributes: { debit, credit },
//               } = element;
//               console.log(debit[0].attributes);
//               return (
//                 <>
//                   <Grid item xs={6}>
//                     <Typography>{credit[0].attributes.title}.....</Typography>
//                   </Grid>
//                   <Grid item></Grid>
//                   <Grid item>
//                     {" "}
//                     <Typography sx={{ color: "red" }}>
//                       Rs {credit.amount}
//                     </Typography>
//                   </Grid>
//                 </>
//               );
//             })
//           : null}
//       </Grid>
//     </Paper>
//   </Box>
// );
