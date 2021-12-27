import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Total({
  currentAsset,
  longtermAsset,
  currentLiability,
  longTermLiability,
  equity,
}) {
  const assetTotalCalculator = () => {
    let total = 0;
    if (currentAsset && longtermAsset) {
      const currentAssetTotal = currentAsset.reduce(
        (accumulator, assetContent, currentIndex, array) => {
          accumulator = accumulator + parseInt(assetContent.amount);
          return accumulator;
        },
        0
      );

      const longTermAssetTotal = longtermAsset.reduce(
        (accumulator, assetContent, currentIndex, array) => {
          accumulator = accumulator + parseInt(assetContent.amount);
          return accumulator;
        },
        0
      );

      total = currentAssetTotal + longTermAssetTotal;
    }

    return total;
  };

  const liabilitiesAndEquityTotal = () => {
    let total = 0;

    if (currentLiability && longTermLiability && equity) {
      const currentLiabilityTotal = currentLiability.reduce(
        (accumulator, liabiltyContent, currentIndex, array) => {
          accumulator = accumulator + parseInt(liabiltyContent.amount);
          return accumulator;
        },
        0
      );

      const longTermLiabilityTotal = longTermLiability.reduce(
        (accumulator, liabiltyContent, currentIndex, array) => {
          accumulator = accumulator + parseInt(liabiltyContent.amount);
          return accumulator;
        },
        0
      );

      const equityTotal = equity.reduce(
        (accumulator, equityContent, currentIndex, array) => {
          accumulator = accumulator + parseInt(equityContent.amount);
          return accumulator;
        },
        0
      );

      total = currentLiabilityTotal + longTermLiabilityTotal + equityTotal;
    }

    return total;
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Grid item>
          <Typography
            sx={{ color: "gray", fontWeight: "bold", padding: "0.5em" }}
            variant="h5">
            Total {assetTotalCalculator()}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{ color: "gray", fontWeight: "bold", padding: "0.5em" }}
            variant="h5">
            Total {liabilitiesAndEquityTotal()}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Total;
