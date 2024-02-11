import React from "react";
import "../App.css";

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

export const MeasuringPointDCData = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={Object.values(props.source)}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="acrelDualData.Power" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelDualData.Power"
        stackId="1"
        stroke="black"
        fill="#8884d8"
      />
    </AreaChart>
  );
};

export const MeasuringPointDCVoltages = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={Object.values(props.source)}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="acrelDualData.DCVoltage" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelDualData.DCVoltage"
        stackId="1"
        stroke="black"
        fill="#96BBBB"
      />
    </AreaChart>
  );
};

export const MeasuringPointDCCurrents = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={Object.values(props.source)}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="acrelDualData.DCCurrent" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelDualData.DCCurrent"
        stackId="1"
        stroke="black"
        fill="#96BBBB"
      />
    </AreaChart>
  );
};

export const MeasuringPointDCPowers = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={Object.values(props.source)}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="acrelDualData.Power" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelDualData.Power"
        stackId="1"
        stroke="black"
        fill="#96BBBB"
      />
    </AreaChart>
  );
};
