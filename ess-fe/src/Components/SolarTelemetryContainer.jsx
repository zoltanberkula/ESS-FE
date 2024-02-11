import "../App.css";

//MATERIAL UI
import { Grid } from "@mui/material";
import { CreateDataLabel } from "./CreateDataLabel";
//MATERIAL UI

//COMPONENTS
import {
  SolarDataGraph,
  SolarVoltageGraph,
  SolarCurrentGraph,
  SolarPowerGraph,
} from "./SolarDataGraph";
//COMPONENTS

export const SolarTelemetryContainer = (props) => {
  return (
    <div className="solarTelemetryWrapper" ref={props.scrollRef}>
      <Grid container id="gridContainer" spacing={2}>
        <Grid item id="solarDataDiv" xs={6}>
          <div className="solarDataGraphWrapper">
            <CreateDataLabel caption="SOLAR DATA GRAPH" />
            <SolarDataGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="solarVoltageDiv" xs={6}>
          <div className="solarVoltageGraphWrapper">
            <CreateDataLabel caption="SOLAR VOLTAGE" />
            <SolarVoltageGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="solarCurrentDiv" xs={6}>
          <div className="solarCurrentGraphWrapper">
            <CreateDataLabel caption="SOLAR CURRENT" />
            <SolarCurrentGraph source={props.source} />
          </div>
        </Grid>
        <Grid item id="solarPowerDiv" xs={6}>
          <div className="solarPowerGraphWrapper">
            <CreateDataLabel caption="SOLAR POWER" />
            <SolarPowerGraph source={props.source} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
