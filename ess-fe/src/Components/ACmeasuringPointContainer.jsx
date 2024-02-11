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
  MeasuringPointACData,
  MeasuringPointACVoltages,
  MeasuringPointACCurrents,
  MeasuringPointACPowers,
} from "./MeasuringPointAC";
//COMPONENTS

export const ACmeasuringPointContainer = (props) => {
  return (
    <div className="mpACTelemetryWrapper">
      <Grid container id="gridContainer" spacing={2}>
        <Grid item id="acmpDataDiv" xs={6}>
          <div className="mpACDataGraphWrapper">
            <CreateDataLabel caption="AC MP 1 TOTAL ACTIVE POWER " />
            <MeasuringPointACData source={props.source} />
          </div>
        </Grid>
        <Grid item id="acmpDataDiv" xs={6}>
          <div className="mpACVoltageGraphWrapper">
            <CreateDataLabel caption="AC MP 1 VOLTAGES" />
            <MeasuringPointACVoltages source={props.source} />
          </div>
        </Grid>
        <Grid item id="acmpDataDiv" xs={6}>
          <div className="mpACCurrentGraphWrapper">
            <CreateDataLabel caption="AC MP 1 CURRENTS" />
            <MeasuringPointACCurrents source={props.source} />
          </div>
        </Grid>
        <Grid item id="acmpDataDiv" xs={6}>
          <div className="mpACPowerGraphWrapper">
            <CreateDataLabel caption="AC MP 1 POWERS" />
            <MeasuringPointACPowers source={props.source} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
