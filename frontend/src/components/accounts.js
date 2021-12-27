import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { utcToZonedTime, format } from "date-fns-tz";

import React, { useState, useEffect } from "react";
import AccountForm from "./accountForm";

import axios from "axios";

function Accounts() {
  const [selectionModel, setSelectionModel] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [fetchedData, setfetchedData] = useState(undefined);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:1337/api/accounts");
      const {
        data: { data },
      } = result;

      setfetchedData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [buttonClicked]);

  const populateRows = () => {
    const dataArray = [];
    if (fetchedData !== undefined) {
      fetchedData.map((data) => {
        const zoned = utcToZonedTime(data.attributes.createdAt);
        const createdDate = format(zoned, "MM/dd/yyyy", {
          timeZone: "Europe/Berlin",
        });
        console.log(format(zoned, "MM/dd/yyyy", { timeZone: "Europe/Berlin" }));
        const rowItem = {
          id: data.id || "not fetched",
          col1: createdDate || "not fetched",
          col2: data.attributes.title,
          col3: data.attributes.description,
          col4: data.attributes.nature,
        };

        dataArray.push(rowItem);
      });
    }

    return dataArray;
  };

  const rows = populateRows();

  const columns = [
    { field: "col1", headerName: "Date", width: 120 },
    { field: "col2", headerName: "Account Name", width: 170 },
    { field: "col3", headerName: "Account description", width: 500 },

    { field: "col4", headerName: "Nature", width: 150 },
  ];

  const table = (
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          checkboxSelection
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );

  const form = <AccountForm />;

  return (
    <>
      {console.log("from populateroe factory", populateRows())}
      <Button
        sx={{ marginBottom: "1em" }}
        color="primary"
        variant="outlined"
        onClick={() => {
          setButtonClicked(!buttonClicked);
        }}>
        {buttonClicked ? "back" : "create account"}
      </Button>

      {buttonClicked ? form : table}
    </>
  );
}

export default Accounts;

// "MM/dd/yyyy"
