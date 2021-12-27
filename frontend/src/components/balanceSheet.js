import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BalanceSheetTitle from "./balanceSheetHelpers/balanceSheetTitle";
import Assethelper from "./balanceSheetHelpers/assethelper";
import LiabilityHelper from "./balanceSheetHelpers/liabilityHelper";
import EquityHelper from "./balanceSheetHelpers/equityHelper";
import Total from "./balanceSheetHelpers/total";
import axios from "axios";

function BalanceSheet() {
  const [isEqual, setIsEqual] = useState(false); //for balancesheet equality

  const [fetchedAssets, setfetchedAssets] = useState(undefined);
  const [totalData, setTotalData] = useState(undefined);

  const fetchAssets = async () => {
    try {
      const result = await axios.get("http://localhost:1337/api/ledgers");
      const {
        data: { data },
      } = result;

      setfetchedAssets(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const totalCalculatedAmount = (debitAmountList, creditAmountList) => {
    let debitTotal = 0;
    let creditTotal = 0;
    let total = 0;
    if (debitAmountList !== undefined) {
      for (let dindex in debitAmountList) {
        debitTotal += debitAmountList[dindex];
      }
    }

    if (creditAmountList !== undefined) {
      for (let cindex in creditAmountList) {
        creditTotal += creditAmountList[cindex];
      }
    }

    if (debitTotal > creditTotal) {
      total = debitTotal - creditTotal;
    } else {
      total = creditTotal - debitTotal;
    }

    return total;
  };

  //this is a role model almost any other data population will follow this
  const currentAssetContentManagement = () => {
    let filteredData = [];
    if (fetchedAssets !== undefined) {
      fetchedAssets.map((element, i) => {
        console.log("fetcj", element.attributes);
        if (element.attributes.nature === "current_asset") {
          filteredData.push({
            accountName: element.attributes.title,
            amount: totalCalculatedAmount(
              element.attributes.debit.amount,
              element.attributes.credit.amount
            ),
          });
        }
      });

      return filteredData;
    }
  };

  const currentAssetContents = currentAssetContentManagement();

  //longTerm Asset

  const longTermAssetContentManagement = () => {
    let filteredData = [];
    if (fetchedAssets !== undefined) {
      fetchedAssets.map((element, i) => {
        console.log("fetcj", element.attributes);
        if (element.attributes.nature === "longterm_asset") {
          filteredData.push({
            accountName: element.attributes.title,
            amount: totalCalculatedAmount(
              element.attributes.debit.amount,
              element.attributes.credit.amount
            ),
          });
        }
      });

      return filteredData;
    }
  };

  const longTermAssetContents = longTermAssetContentManagement();

  //   { accountName: "cash acoount", amount: 10000 },
  // { accountName: "building acoount", amount: 5000 },
  // { accountName: "cash acoount", amount: 2000 },
  // { accountName: "building acoount", amount: 5000 },
  // { accountName: "cash acoount", amount: 2000 },
  // { accountName: "building acoount", amount: 5000 },
  // { accountName: "cash acoount", amount: 2000 },
  // { accountName: "building acoount", amount: 5000 },
  // { accountName: "cash acoount", amount: 2000 },
  // { accountName: "building acoount", amount: 5000 },
  // { accountName: "cash acoount", amount: 2000 },
  // { accountName: "building acoount", amount: 5000 },
  // ];

  const currentLiabilityContentManagement = () => {
    let filteredData = [];
    if (fetchedAssets !== undefined) {
      fetchedAssets.map((element, i) => {
        if (element.attributes.nature === "current_liability") {
          filteredData.push({
            accountName: element.attributes.title,
            amount: totalCalculatedAmount(
              element.attributes.debit.amount,
              element.attributes.credit.amount
            ),
          });
        }
      });

      return filteredData;
    }
  };
  const currentLiabiltyContents = currentLiabilityContentManagement();

  //longterm_Liability
  const longTermLiabilityContentManagement = () => {
    let filteredData = [];
    if (fetchedAssets !== undefined) {
      fetchedAssets.map((element, i) => {
        if (element.attributes.nature === "longterm_liability") {
          filteredData.push({
            accountName: element.attributes.title,
            amount: totalCalculatedAmount(
              element.attributes.debit.amount,
              element.attributes.credit.amount
            ),
          });
        }
      });

      return filteredData;
    }
  };
  const longTermLiabiltyContents = longTermLiabilityContentManagement();
  // [
  // { accountName: "cash payable", amount: 10000 },
  // { accountName: "notes payable", amount: 15000 },
  // { accountName: "cash payable", amount: 11000 },
  // { accountName: "notes payable", amount: 15000 },
  // { accountName: "cash payable", amount: 11000 },
  // { accountName: "notes payable", amount: 15000 },
  // { accountName: "cash payable", amount: 11000 },
  // { accountName: "notes payable", amount: 15000 },
  // { accountName: "cash payable", amount: 11000 },
  // { accountName: "notes payable", amount: 15000 },
  // ];

  const equityContentManagement = () => {
    let filteredData = [];
    if (fetchedAssets !== undefined) {
      fetchedAssets.map((element, i) => {
        if (element.attributes.nature === "owner_equity") {
          filteredData.push({
            accountName: element.attributes.title,
            amount: totalCalculatedAmount(
              element.attributes.debit.amount,
              element.attributes.credit.amount
            ),
          });
        }
      });

      return filteredData;
    }
  };
  const equityContent = equityContentManagement();

  // [{ accountName: "capital stock", amount: 80000 }];

  //helper functions
  const equalityCalculator = (ca, la, cl, ll, e) => {
    //ca --> currentAssets
    //la --> longterm assets
    //cl --> current liability
    //ll --> longterm liability
    const currentAssetTotal = ca.reduce(
      (accumulator, assetContent, currentIndex, array) => {
        accumulator = accumulator + parseInt(assetContent.amount);
        return accumulator;
      },
      0
    );

    const longTermAssetTotal = la.reduce(
      (accumulator, assetContent, currentIndex, array) => {
        accumulator = accumulator + parseInt(assetContent.amount);
        return accumulator;
      },
      0
    );

    const currentLiabilityTotal = cl.reduce(
      (accumulator, liabiltyContent, currentIndex, array) => {
        accumulator = accumulator + parseInt(liabiltyContent.amount);
        return accumulator;
      },
      0
    );

    const longTermLiabilityTotal = ll.reduce(
      (accumulator, liabiltyContent, currentIndex, array) => {
        accumulator = accumulator + parseInt(liabiltyContent.amount);
        return accumulator;
      },
      0
    );

    const equityTotal = e.reduce(
      (accumulator, equityContent, currentIndex, array) => {
        accumulator = accumulator + parseInt(equityContent.amount);
        return accumulator;
      },
      0
    );

    const totalAssets = currentAssetTotal + longTermAssetTotal;
    const totalLiabilities = currentLiabilityTotal + longTermLiabilityTotal;

    const liabilitiesAndEquityTotal = totalLiabilities + equityTotal;

    if (totalAssets === liabilitiesAndEquityTotal) {
      setIsEqual(true);

      return "equal";
    }

    return "not equal";
  };

  useEffect(() => {
    if (
      currentAssetContents !== undefined &&
      longTermAssetContents !== undefined
    ) {
      console.log(
        equalityCalculator(
          currentAssetContents,
          longTermAssetContents,
          currentLiabiltyContents,
          longTermLiabiltyContents,
          equityContent
        )
      );
    }
  });

  const borderColor = isEqual ? "common.GREEN" : "common.RED";

  const assets = (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 800,
        },
      }}>
      <Paper sx={{ borderColor: borderColor }} variant="outlined">
        {/* current asset */}
        <Assethelper
          title={"Assets"}
          contents={
            currentAssetContents !== undefined
              ? currentAssetContents
              : undefined
          }
        />
        {/* longterm Asset */}
        <Assethelper
          contents={
            longTermAssetContents !== undefined
              ? longTermAssetContents
              : undefined
          }
        />
      </Paper>
    </Box>
  );

  const liabilitiesAndEquity = (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 800,
        },
      }}>
      <Paper sx={{ borderColor: borderColor }} variant="outlined">
        <LiabilityHelper
          title={"Liability"}
          contents={
            currentLiabiltyContents !== undefined
              ? currentLiabiltyContents
              : undefined
          }
          currentLiabiltyContents
        />
        <LiabilityHelper
          contents={
            longTermLiabiltyContents !== undefined
              ? longTermLiabiltyContents
              : undefined
          }
        />
        <EquityHelper
          title={"Owner Equity"}
          contents={equityContent !== undefined ? equityContent : undefined}
        />
      </Paper>
    </Box>
  );

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
        <BalanceSheetTitle
          title="Over Night Auto Shop"
          description="This is some basic description"
          date="2-jan-2021"
        />
      </Paper>
    </Box>
  );

  //total helpers
  // const assetTotalAmount =
  //   assetContents &&
  //   assetContents.reduce((accumulator, assetContent, currentIndex, array) => {
  //     accumulator = accumulator + parseInt(assetContent.amount);
  //     return accumulator;
  //   }, 0);

  //total component
  const total = (
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
      <Paper sx={{ borderColor: "common.RED" }} variant="outlined">
        <Total
          currentAsset={
            currentAssetContents !== undefined
              ? currentAssetContents
              : undefined
          }
          longtermAsset={
            longTermAssetContents !== undefined
              ? longTermAssetContents
              : undefined
          }
          currentLiability={
            currentLiabiltyContents !== undefined
              ? currentLiabiltyContents
              : undefined
          }
          longTermLiability={
            longTermLiabiltyContents !== undefined
              ? longTermLiabiltyContents
              : undefined
          }
          equity={equityContent !== undefined ? equityContent : undefined}
        />
      </Paper>
    </Box>
  );

  return (
    <>
      {/* {console.log(assetContentManagement())} */}

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>{title}</Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item>{assets}</Grid>
            <Grid item>{liabilitiesAndEquity}</Grid>
          </Grid>
        </Grid>
        <Grid item>{total}</Grid>
      </Grid>
    </>
  );
}

export default BalanceSheet;

// console.log(fetchedAssets[3].attributes.debit[0].attributes.nature)
