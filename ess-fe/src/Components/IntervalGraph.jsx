//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

//RECHARTS COMPONENTS
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
//RECHARTS COMPONENTS

//COMPONENTS
import { CreateDataLabel } from "./CreateDataLabel";
//COMPONENTS

//STYLE HELPERS
import {
  getRandomFromColorStack,
  getTheColorStack,
} from "../themes/styleTools";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
//STYLE HELPERSs

export const IntervalGraph = (props) => {
  let stackIdCounter = 0;
  const [dcEmd1Checked, setdcEmd1Checked] = React.useState(false);
  const [dcEmd2checked, setdcEmd2Checked] = React.useState(false);
  const [acEmdchecked, setacEmdChecked] = React.useState(false);
  const [batteryChecked, setBatteryChecked] = React.useState(false);
  
  let dynamicMeasurands = [...props.measurands];
  const x = "acrelData.DCCurrent";
  
  if (dcEmd1Checked) {
    dynamicMeasurands.push(x);
  } else {
    dynamicMeasurands = dynamicMeasurands.slice(
      dynamicMeasurands.indexOf(x),
      1
    );
  }

  console.log(dynamicMeasurands);
  return (
    <div>
      <CreateDataLabel caption={props.caption} />
      <div>
        <FormControlLabel
          control={<Switch onClick={setdcEmd1Checked} name="giad" />}
          label="DC EMD 1"
        />
        <FormControlLabel
          control={<Switch onClick={setdcEmd2Checked} name="giad" />}
          label="DC EMD 2"
        />
        <FormControlLabel
          control={<Switch onClick={setacEmdChecked} name="giad" />}
          label="AC EMD 1"
        />
        <FormControlLabel
          control={<Switch onClick={setBatteryChecked} name="giad" />}
          label="Battery"
        />
      </div>
      <div className="solarDataDiv">
        <AreaChart
          width={850}
          height={500}
          data={Object.values(props.input)}
          margin={{
            top: 10,
            right: 0,
            left: 40,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="black" />
          <XAxis dataKey="time.date" tick={{ fill: "black" }} />
          <YAxis dataKey={props.yDataKey} tick={{ fill: "black" }} />
          <Tooltip />
          {props.measurands.map((item) => (
            <Area
              isAnimationActive={false}
              type="monotone"
              dataKey={item}
              stackId={stackIdCounter++}
              stroke="black"
              fill={getRandomFromColorStack()}
            />
          ))}
        </AreaChart>
      </div>
    </div>
  );
};
