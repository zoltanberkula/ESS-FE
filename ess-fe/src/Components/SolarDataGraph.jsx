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

export const SolarDataGraph = (props) => {
  console.log("SOLAR props:", props);
  console.log("SOLAR props.source", Object.values(props.source));
  console.log("SOLAR PROPS VALUES", props);
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
      <XAxis dataKey="time.date" name="Time" tick={{ fill: "black" }} />
      <YAxis
        dataKey="acrelData.DCVoltage"
        name="Voltage"
        tick={{ fill: "black" }}
      />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.DCVoltage"
        stackId="1"
        stroke="black"
        fill="#111D13"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.DCCurrent"
        stackId="1"
        stroke="black"
        fill="#415D43"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.Power"
        stackId="1"
        stroke="black"
        fill="#22577A"
      />
    </AreaChart>
  );
};

export const SolarVoltageGraph = (props) => {
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
      <XAxis dataKey="time.date" name="Time" tick={{ fill: "black" }} />
      <YAxis
        dataKey="acrelData.DCVoltage"
        name="Voltage"
        tick={{ fill: "black" }}
      />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.DCVoltage"
        stackId="1"
        stroke="black"
        fill="#111D13"
      />
    </AreaChart>
  );
};

export const SolarCurrentGraph = (props) => {
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
      <YAxis dataKey="acrelData.DCCurrent" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.DCCurrent"
        stackId="1"
        stroke="black"
        fill="#415D43"
      />
    </AreaChart>
  );
};

export const SolarPowerGraph = (props) => {
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
      <YAxis tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="acrelData.Power"
        stackId="1"
        stroke="black"
        fill="#22577A"
      />
    </AreaChart>
  );
};
