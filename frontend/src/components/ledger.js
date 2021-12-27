import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LedgerBox from "./ledgerBox";
import axios from "axios";

function Ledger() {
  const [fetchedAssets, setfetchedAssets] = useState(undefined);

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

  let ledgerBox =
    fetchedAssets !== undefined
      ? fetchedAssets.map((element, i) => {
          const { attributes } = element;
          console.log(attributes);
          return (
            <>
              <Grid item xs={6}>
                <LedgerBox
                  title={attributes.title}
                  debitAmount={attributes.debit.amount}
                  creditAmount={attributes.credit.amount}
                />
              </Grid>
            </>
          );
        })
      : "";

  return (
    <>
      {/* {console.log(fetchGeneralJournalEntries())} */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "beige",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">
          {ledgerBox}
        </Grid>
      </Box>
    </>
  );
}

export default Ledger;

// const fetchGeneralJournalEntries = () => {
//   if (fetchedAssets !== undefined) {
//     fetchedAssets.map((element, i) => {
//       const {
//         attributes: { debit },
//       } = element;
//       console.log(debit[0].attributes);
//       return (
//         <LedgerBox title={"hello"} debitAmount={6000} creditAmount={0} />
//       );
//     });
//   }
// };

//old ledger box
// let ledgerBox =
//     fetchedAssets !== undefined
//       ? fetchedAssets.map((element, i) => {
//           const {
//             attributes: { debit, credit },
//           } = element;
//           console.log(debit[0].attributes);
//           return (
//             <>
//               <Grid item xs={6}>
//                 <LedgerBox
//                   title={debit[0].attributes.title}
//                   debitAmount={debit.amount}
//                   creditAmount={0}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <LedgerBox
//                   title={credit[0].attributes.title}
//                   debitAmount={0}
//                   creditAmount={credit.amount}
//                 />
//               </Grid>
//             </>
//           );
//         })
//       : "";
