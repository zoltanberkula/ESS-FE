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
  MeasuringPointDCData,
  MeasuringPointDCVoltages,
  MeasuringPointDCCurrents,
  MeasuringPointDCPowers,
} from "./MeasuringPointDC";
//COMPONENTS

export const DCmeasuringPointContainer = (props) => {
  return (
    <div className="mpDCTelemetryWrapper">
      <Grid container id="gridContainer" spacing={2}>
        <Grid item id="dcmpDataDiv" xs={6}>
          <div className="mpDCDataGraphWrapper">
            <CreateDataLabel caption="DC MEASURING POINT 1" />
            <MeasuringPointDCData source={props.source} />
          </div>
        </Grid>
        <Grid item id="dcmpDataDiv" xs={6}>
          <div className="mpDCVoltageGraphWrapper">
            <CreateDataLabel caption="DC MP 1 VOLTAGES" />
            <MeasuringPointDCVoltages source={props.source} />
          </div>
        </Grid>
        <Grid item id="dcmpDataDiv" xs={6}>
          <div className="mpDCCurrentGraphWrapper">
            <CreateDataLabel caption="DC MP 1 CURRENTS" />
            <MeasuringPointDCCurrents source={props.source} />
          </div>
        </Grid>
        <Grid item id="dcmpDataDiv" xs={6}>
          <div className="mpDCPowerGraphWrapper">
            <CreateDataLabel caption="DC MP 1 POWERS" />
            <MeasuringPointDCPowers source={props.source} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
