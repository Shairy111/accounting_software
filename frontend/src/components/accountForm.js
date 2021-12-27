import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, InputLabel, MenuItem, Select } from "@mui/material";

import axios from "axios";

function AccountForm() {
  const [title, setTitle] = useState("hello");
  const [description, setDescription] = useState("world");

  const [accountNature, setAccountNature] = useState("revenue");

  const handleForm = async (e) => {
    try {
      const response = await axios.post("http://localhost:1337/api/accounts", {
        data: {
          title: title,
          description: description,
          nature: accountNature,
        },
      });
      console.log(response);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Box
              sx={{
                paddingTop: "2em",
              }}>
              <TextField
                id="accountTitle"
                label="accountTitle"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                paddingTop: "2em",
              }}>
              <TextField
                id="accountDesc"
                label="accountDesc"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                paddingTop: "2em",
              }}>
              <InputLabel id="nature">Select A/C nature</InputLabel>
              <Select
                labelId="account-nature"
                id="nature"
                value={accountNature}
                label="nature"
                onChange={(e) => {
                  setAccountNature(e.target.value);
                }}>
                <MenuItem value={"owner_equity"}>owner equity</MenuItem>
                <MenuItem value={"current_asset"}>current asset</MenuItem>
                <MenuItem value={"longterm_asset"}>longterm asset</MenuItem>
                <MenuItem value={"current_liability"}>
                  current liability
                </MenuItem>
                <MenuItem value={"longterm_liability"}>
                  longterm liability
                </MenuItem>

                {/* <MenuItem value={"revenue"}>revenue</MenuItem>
                <MenuItem value={"expense"}>Expense</MenuItem> */}
              </Select>
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
            <Button onClick={handleForm} variant="contained" color="primary">
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

export default AccountForm;
