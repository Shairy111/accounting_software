import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Button, InputLabel, MenuItem, Select } from "@mui/material";

//date libraries
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
//------

import axios from "axios";

function GeneralJournalForm() {
  const [debitAccount, setDebitAccount] = useState("");

  const [debitAmount, setDebitAmount] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0);

  const [creditAccount, setCreditAccount] = useState(10);

  const [debitData, setDebitData] = useState(undefined);
  const [creditData, setCreditData] = useState(undefined);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [dataPosted, setDataPosted] = useState(false);
  const [fetchedData, setfetchedData] = useState(undefined);

  //date
  const [date, setDate] = useState(null);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:1337/api/accounts");
      const {
        data: { data },
      } = result;

      setfetchedData(data);
    } catch (error) {}
  };

  //dummy useEffect for checking

  const notInitializedRender = useRef(false);

  const postToLedger = async () => {
    if (notInitializedRender.current) {
      console.log("not initial render");
      try {
        await axios.get("http://localhost:1337/api/ledger/work");
      } catch (error) {
        console.log(error);
      }
    } else {
      notInitializedRender.current = true;
    }
  };
  useEffect(() => {
    postToLedger();
  }, [dataPosted]);

  useEffect(() => {
    fetchData();
  }, [buttonClicked]);

  useEffect(() => {
    formPreProcessing();
  }, [debitAccount, debitAmount, creditAccount, creditAmount, date]);

  const formPreProcessing = () => {
    console.log("i ran");
    if (fetchedData && debitAccount && debitAmount) {
      const filteredData = fetchedData.filter((data, i) => {
        return data.attributes.title === debitAccount;
      });
      // const amount = { amount: debitAmount };

      setDebitData({ ...filteredData, amount: debitAmount });
    }

    if (fetchedData && creditAccount && creditAmount) {
      const filteredData = fetchedData.filter((data, i) => {
        return data.attributes.title === creditAccount;
      });
      // const amount = { amount: debitAmount };
      setCreditData({ ...filteredData, amount: creditAmount });
    }
  };

  const submitForm = async () => {
    setButtonClicked(!buttonClicked);

    try {
      const result = await axios.post(
        "http://localhost:1337/api/general-journals",
        { data: { debit: debitData, credit: creditData, date: date } }
      );

      setDataPosted(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                paddingTop: "0.5em",
              }}>
              {/* date selection */}

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              {/* end date selection */}

              <InputLabel id="demo-simple-select-label">
                Debit Account
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={debitAccount}
                label="Age"
                onChange={(e) => {
                  setDebitAccount(e.target.value);
                }}>
                {fetchedData !== undefined ? (
                  fetchedData.map((data, i) => {
                    return (
                      <MenuItem key={i} value={data.attributes.title}>
                        {data.attributes.title}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value={""}>{""}</MenuItem>
                )}
              </Select>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                paddingTop: "2em",
              }}>
              <TextField
                id="amountOne"
                label="amount"
                value={debitAmount}
                onChange={(e) => {
                  setDebitAmount(e.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                paddingTop: "0.5em",
              }}>
              <InputLabel id="demo-simple-select-label">
                Credit Account
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={creditAccount}
                label="credit Account"
                onChange={(e) => {
                  setCreditAccount(e.target.value);
                }}>
                {fetchedData !== undefined ? (
                  fetchedData.map((data) => {
                    return (
                      <MenuItem value={data.attributes.title}>
                        {data.attributes.title}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value={""}>{""}</MenuItem>
                )}
              </Select>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                paddingTop: "2em",
              }}>
              <TextField
                id="amountTwo"
                label="amountTwo"
                value={creditAmount}
                onChange={(e) => {
                  setCreditAmount(e.target.value);
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          paddingTop: "2em",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Grid item>
            <Button onClick={submitForm} variant="contained" color="primary">
              POST
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* <Box
        sx={{
          paddingTop: "2em",
        }}>
        <TextField
          id="accountTitle"
          label="accountTitle"
          value={"hello"}
          onChange={() => {}}
        />
      </Box>

      <Box
        sx={{
          paddingTop: "2em",
        }}>
        <TextField
          id="accountTitle"
          label="accountTitle"
          value={"hello"}
          onChange={() => {}}
        />
      </Box>

      <Box
        sx={{
          paddingTop: "2em",
        }}>
        <TextField
          id="accountTitle"
          label="accountTitle"
          value={"hello"}
          onChange={() => {}}
        />
      </Box> */}
    </>
  );
}

export default GeneralJournalForm;

// {fetchedData !== undefined ? (
//   fetchedData.map((data, i) => {
//     return (
//       data.attributes.type === "debit" && (
//         <MenuItem key={i} value={data.attributes.title}>
//           {data.attributes.title}
//         </MenuItem>
//       )
//     );
//   })
