import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import React, { useEffect, useState } from "react";
import GeneralJournalForm from "./generalJournalForm";
import axios from "axios";
import GeneralJournalEntry from "./generalJournalEntry";
import GeneralJournalTitle from "./generalJournalTitle";

function GeneralJournal() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [fetchedData, setfetchedData] = useState(undefined);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "http://localhost:1337/api/general-journals"
      );

      const {
        data: { data },
      } = result;

      setfetchedData(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [buttonClicked]);

  const form = <GeneralJournalForm />;

  const controlledDataConsume = () => {
    if (fetchedData !== undefined) {
      return (
        <>
          <GeneralJournalTitle />
          {fetchedData.map((element, i) => {
            const {
              attributes: { debit, credit },
            } = element;
            return (
              <GeneralJournalEntry
                key={i}
                date={element.attributes.date}
                debitAc={debit[0].attributes.title}
                debitAmount={debit.amount}
                creditAc={credit[0].attributes.title}
                creditAmount={credit.amount}
              />
            );
          })}
        </>
      );
    }
  };

  const customTable = controlledDataConsume();

  return (
    <>
      {console.log(fetchedData)}
      <Button
        color="primary"
        variant="outlined"
        onClick={() => {
          setButtonClicked(!buttonClicked);
        }}>
        {buttonClicked ? "back" : "create entry"}
      </Button>

      {buttonClicked ? form : customTable}
    </>
  );
}

export default GeneralJournal;

//GeneralJournal
