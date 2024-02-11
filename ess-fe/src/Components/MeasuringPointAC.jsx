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

export const MeasuringPointACData = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={props.source}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="lumelData.TotalActivePower" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.TotalActivePower"
        stackId="1"
        stroke="black"
        fill="#22577A"
      />
    </AreaChart>
  );
};

export const MeasuringPointACVoltages = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={props.source}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="lumelData.L1Voltage" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L1Voltage"
        stackId="1"
        stroke="black"
        fill="#96BBBB"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L2Voltage"
        stackId="2"
        stroke="black"
        fill="#618985"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L3Voltage"
        stackId="3"
        stroke="black"
        fill="#52B788"
      />
    </AreaChart>
  );
};

export const MeasuringPointACCurrents = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={props.source}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis
        dataKey="lumelData.L1Current"
        tick={{ fill: "black" }}
        tickCount={5}
      />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L1Current"
        stackId="1"
        stroke="black"
        fill="#3A7CA5"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L2Current"
        stackId="2"
        stroke="black"
        fill="#F7B538"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L3Current"
        stackId="3"
        stroke="black"
        fill="#81C3D7"
      />
    </AreaChart>
  );
};

export const MeasuringPointACPowers = (props) => {
  return (
    <AreaChart
      width={600}
      height={500}
      data={props.source}
      margin={{
        top: 10,
        right: 0,
        left: 40,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey="time.date" tick={{ fill: "black" }} />
      <YAxis dataKey="lumelData.L1Power" tick={{ fill: "black" }} />
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L1Power"
        stackId="1"
        stroke="#3e4444"
        fill="#3e4444"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L2Power"
        stackId="2"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        isAnimationActive={false}
        type="monotone"
        dataKey="lumelData.L3Power"
        stackId="3"
        stroke="#b5e7a0"
        fill="#b5e7a0"
      />
    </AreaChart>
  );
};
