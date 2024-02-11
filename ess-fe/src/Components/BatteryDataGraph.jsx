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

export const BatteryDataGraph = (props) => {
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
      <YAxis dataKey="batteryData.TotalVoltage" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.TotalVoltage"
        stackId="1"
        stroke="#black"
        fill="#111D13"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.TotalCurrent"
        stackId="2"
        stroke="black"
        fill="#A1CCA5"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.SystemSOC"
        stackId="3"
        stroke="black"
        fill="#22577A"
      />
    </AreaChart>
  );
};

export const BatteryVoltageGraph = (props) => {
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
      <YAxis dataKey="batteryData.TotalVoltage" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.TotalVoltage"
        stackId="1"
        stroke="black"
        fill="#111D13"
      />
    </AreaChart>
  );
};

export const BatteryCurrentGraph = (props) => {
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
      <YAxis dataKey="batteryData.TotalCurrent" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.TotalCurrent"
        stackId="1"
        stroke="black"
        fill="#A1CCA5"
      />
    </AreaChart>
  );
};

export const BatterySOCGraph = (props) => {
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
      <YAxis dataKey="batteryData.SystemSOC" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.SystemSOC"
        stackId="1"
        stroke="black"
        fill="#22577A"
      />
    </AreaChart>
  );
};

export const BatterySOHGraph = (props) => {
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
      <YAxis dataKey="batteryData.SOH" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="batteryData.SOH"
        stackId="1"
        stroke="##ff0040"
        fill="#ff0040"
      />
    </AreaChart>
  );
};
