import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

// import Button from "@mui/material/Button";
import Main from "./main";
import Accounts from "./accounts";
import BalanceSheet from "./balanceSheet";
import IncomeStatement from "./incomeStatement";
import Ledger from "./ledger";
import GeneralJournal from "./generalJournal";
import TrialBalance from "./trialBalance";

function Layout({ children }) {
  const drawerWidth = 240;
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedStep] = useState("account");
  const [page, setPage] = useState();

  //helper functions
  // const handleStep = () => {
  //   const currentTab = components.find((component) => {
  //     return component.name === selectedTab;
  //   });
  //   setPage(currentTab);
  // };

  const components = [
    { name: "account", compo: <Accounts /> },
    // { name: "Dashboard", compo: <Dashboard /> },
    { name: "General Jornal", compo: <GeneralJournal /> },
    { name: "Ledger Accounts", compo: <Ledger /> },
    { name: "Balance Sheet", compo: <BalanceSheet /> },
    { name: "Trial Balance", compo: <TrialBalance /> },
    { name: "Income Statement", compo: <IncomeStatement /> },
  ];

  useEffect(() => {
    const currentTab = components.find((component) => {
      return component.name === selectedTab;
    });
    setPage(currentTab);
  }, [selectedTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //links
  const links = [
    // "Dashboard",
    "Accounts",
    "General Jornal",
    "Ledger Accounts",
    "Balance Sheet",
    "Trial Balance",
    "Income Statement",
  ];

  const tabs = (
    <Tabs value={value} onChange={handleChange}>
      {links.map((link) => {
        return (
          <Link href={`/${link}`} underline="none">
            <Tab label={link} />
          </Link>
        );
      })}
    </Tabs>
  );

  const drawer = (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {links.map((link, i) => {
            return (
              <ListItem
                button
                key={i}
                onClick={() => {
                  setSelectedStep(link);
                }}>
                <ListItemText primary={link} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}>
          <Toolbar>
            {/* {tabs} */}
            <Typography variant="h6" noWrap component="div">
              {selectedTab}
            </Typography>
          </Toolbar>
        </AppBar>

        {drawer}

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Toolbar />

          {/* <Main>{children}</Main> */}

          {console.log(page)}

          {page !== undefined ? page.compo : <Accounts />}

          {/* <BalanceSheet /> */}
        </Box>
      </Box>
    </>
  );
}

export default Layout;

// <Button
//   onClick={() => {
//     setDrawerOpen(true);
//   }}>
//   open
// </Button>;
