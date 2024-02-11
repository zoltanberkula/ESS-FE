//DEFAULT IMPORTS
import * as React from "react";
//DEFAULT IMPORTS

//MATERIAL-UI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
//MATERIAL-UI

//HELPERS
import { epochToDate } from "../helpers/helperFunctions";
import { dynObj } from "../helpers/helperFunctions";
//HELPERS

export const BasicSelect = (props) => {
  const handleChange = (event) => {
    if (event.target.name === "from") {
      props.state(event.target.value);
    } else if (event.target.name === "to") {
      props.state(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          style={{ margin: 5 }}
          value={props.value}
          label={props.label}
          name={props.name}
          onChange={handleChange}
        >
          {Object.values(dynObj(props.stamps, "Date")).map((date) => {
            return (
              <MenuItem value={date}>
                {epochToDate(date)}
                <HistoryOutlinedIcon fontSize="small" />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
