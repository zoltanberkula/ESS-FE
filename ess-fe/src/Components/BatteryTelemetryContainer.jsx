//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

//MATERIAL UI
import { Grid } from "@mui/material";
import { CreateDataLabel } from "./CreateDataLabel";
//MATERIAL UI

//COMPONENTS
import {
  BatteryDataGraph,
  BatteryVoltageGraph,
  BatteryCurrentGraph,
  BatterySOCGraph,
  //BatterySOHGraph,
} from "./BatteryDataGraph";
//COMPONENTS

export const BatteryTelemetryContainer = (props) => {
  return (
    <div className="batteryTelemetryWrapper" ref={props.scrollRef}>
      <Grid container id="gridContainer" spacing={2}>
        <Grid item id="batteryDataDiv" xs={6}>
          <div className="batteryDataGraphWrapper">
            <CreateDataLabel caption="BATTERY DATA" />
            <BatteryDataGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="batteryVoltageDiv" xs={6}>
          <div className="batteryVoltageGraphWrapper">
            <CreateDataLabel caption="BATTERY VOLTAGE" />
            <BatteryVoltageGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="batteryCurrentDiv" xs={6}>
          <div className="batteryCurrentGraphWrapper">
            <CreateDataLabel caption="BATTERY CURRENT" />
            <BatteryCurrentGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="batterySOCDiv" xs={6}>
          <div className="batterySOCGraphWrapper">
            <CreateDataLabel caption="BATTERY SOC" />
            <BatterySOCGraph source={props.source} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
