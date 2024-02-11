//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

//MATERIAL-UI
import { Grid, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//MATERIAL-UI

//COMPONENTS
import { CreateDataLabel } from "./CreateDataLabel";
//COMPONENTS

//STYLES
import logTableStyling from "../themes/contTableStyling";
//STYLES

//HELPERS
import epochToDate from "../helpers/helperFunctions";
//HELPERS

export const Logs = (props) => {
  return (
    <div className="dataTable">
      <CreateDataLabel caption="LOGS" />
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
                    <b>Acrel Channel 1 Data</b>
                    <TableRow>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        <b>Identifier</b>
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        <b>Value</b>
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        <b>Date</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(props.input[0]["acrelData"]).map((row) => (
                      <TableRow key={row}>
                        <TableCell sx={{ ...logTableStyling }} align="center">
                          {row[0]}
                        </TableCell>
                        <TableCell sx={{ ...logTableStyling }} align="center">
                          {row[1]}
                        </TableCell>
                        <TableCell sx={{ ...logTableStyling }} align="center">
                          {epochToDate(props.input[0]["time"]["timestamp"])}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Table
                  className="tableClass"
                  sx={{ minWidth: 350 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <b>Acrel Channel 2 Data</b>
                    <TableRow>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Identifier
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Value
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(props.input[0]["acrelDualData"]).map(
                      (row) => (
                        <TableRow key={row}>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {row[0]}
                          </TableCell>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {row[1]}
                          </TableCell>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {epochToDate(props.input[0]["time"]["timestamp"])}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
                <Table
                  className="tableClass"
                  sx={{ minWidth: 350 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <b>Battery Data</b>
                    <TableRow>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Identifier
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Value
                      </TableCell>
                      <TableCell sx={{ ...logTableStyling }} align="center">
                        Date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(props.input[0]["batteryData"]).map(
                      (row) => (
                        <TableRow key={row}>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {row[0]}
                          </TableCell>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {row[1]}
                          </TableCell>
                          <TableCell sx={{ ...logTableStyling }} align="center">
                            {epochToDate(props.input[0]["time"]["timestamp"])}
                          </TableCell>
                        </TableRow>
                      )
                    )}
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
