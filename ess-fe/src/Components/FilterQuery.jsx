//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

//MATERIAL-UI
import { Button, ThemeProvider } from "@mui/material";
//MATERIAL-UI

//COMPONENTS
import { BasicSelect } from "./BasicSelect";
import { CreateDataLabel } from "./CreateDataLabel";
//COMPONENTS

import Navbartheme from "../themes/NavbarTheme";

export const FilterQuery = (props) => {
  const [from, setFrom] = React.useState(0);
  const [to, setTo] = React.useState(0);
  return (
    <div className="QueryContainer">
      <CreateDataLabel caption="LOG QUERY" />
      <div className="FilterQueryContainer">
        <BasicSelect
          stamps={props.stamps}
          value={from}
          state={setFrom}
          name="from"
          label="From"
        />
        <BasicSelect
          stamps={props.stamps}
          value={to}
          state={setTo}
          name="to"
          label="To"
        />
        <ThemeProvider theme={Navbartheme}>
          <Button
            onClick={() => {
              // props.doQueryCB(
              //   from,
              //   to,
              //   props.states.setFromDate,
              //   props.states.setToDate
              // );
              props.doIntervalQueryCB(from, to, props.states.setDateInterval);
              setTimeout(() => {
                props.showQueryCB(!props.showQuery);
                //console.log("filter pressed!");
                //console.log("From", from);
                //console.log("To", to);
              }, 300);
            }}
            style={{ bottom: 3 }}
            variant="contained"
            color="neutral"
            size="medium"
          >
            Filter
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
