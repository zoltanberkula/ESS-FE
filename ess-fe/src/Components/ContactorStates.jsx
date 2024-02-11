//DEFAULT IMPORTS
import * as React from "react";
import "../App.css";
//DEFAULT IMPORTS

//MATERIAL UI
import { Grid, Radio, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//MATERIAL UI

//HELPERS
//HELPERS

//STYLINGS
import contTableStyling from "../themes/contTableStyling";
//STYLINGS

//COMPONENTS
import { CreateDataLabel } from "./CreateDataLabel";
//COMPONENTS

function isContactorON(state) {
  if (state === "ON" || state === "true" || state === 1) {
    return <Radio checked color="success" />;
  } else if (state === "OFF" || state === "false" || state === 0) {
    return <Radio disabled color="success" />;
  } else {
    console.error("Invalid Contactor State!");
  }
}

export const BasicTable = (props) => {
  const contactorStates = Object.entries(
    props.source[props.source.length - 1]["contactorStates"]
  );
  const thisTimeStamp = new Date(
    props.source[props.source.length - 1]["time"]["timestamp"]
  ).toLocaleString();
  // const states = Object.values(props.source);
  return (
    <div className="dataTable">
      <CreateDataLabel caption="CONTACTOR STATES" />
      <Card
        className="wrapperCard"
        sx={{ minWidth: 275, backgroundColor: "#38A3A5" }}
      >
        <CardContent>
          <Grid container id="gridContainer" spacing={2}>
            <Grid item xs={6}>
              <TableContainer
                component={Paper}
                sx={{
                  //border: "1px solid rgba(0,0,0,0.2)",
                  width: "max-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 3,
                }}
              >
                <Table
                  className="tableClass"
                  sx={{ minWidth: 350 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ ...contTableStyling }} align="center">
                        Id
                      </TableCell>
                      <TableCell sx={{ ...contTableStyling }} align="center">
                        Status
                      </TableCell>
                      <TableCell sx={{ ...contTableStyling }} align="center">
                        Timestamp
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {contactorStates.map((row) => (
                      <TableRow key={row}>
                        <TableCell sx={{ ...contTableStyling }} align="center">
                          {row[0]}
                        </TableCell>
                        <TableCell sx={{ ...contTableStyling }} align="center">
                          {row[1]}
                          {isContactorON(row[1])}
                        </TableCell>
                        <TableCell sx={{ ...contTableStyling }} align="center">
                          {thisTimeStamp}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
