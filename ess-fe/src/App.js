//DEFAULT
import { useState, useEffect, useRef } from "react";
import "./App.css";
//DEFAULT

//COMPONENTS
import { HomePageHeader } from "./Components/HomePageHeader";
import { Navbar } from "./Components/Navbar";
import { ACmeasuringPointContainer } from "./Components/ACmeasuringPointContainer";
import { DCmeasuringPointContainer } from "./Components/DCmeasuringPointContainer";
import { BatteryTelemetryContainer } from "./Components/BatteryTelemetryContainer";
import { SolarTelemetryContainer } from "./Components/SolarTelemetryContainer";
import { BasicTable } from "./Components/ContactorStates";
import { InteractiveBlockDiagram } from "./Components/InteractiveBlockDiagram";
import { ScrollButton } from "./Components/ScrollButton";
import { LogQuery } from "./Components/LogQuery";
//COMPONENTS

//HELPERS
import { getSnapShot } from "./helpers/helperFunctions";
import { queryDate } from "./helpers/helperFunctions";
import { getTimestamps } from "./helpers/helperFunctions";
import { getDateInterval } from "./helpers/helperFunctions";
//HELPERS

//MATERIAL UI
//MATERIAL UI

function App() {
  //STATES
  const [showHome, setShowHome] = useState(false);
  const [showSolar, setShowSolar] = useState(false);
  const [showBattery, setShowBattery] = useState(false);
  const [showACmp, setShowACmp] = useState(false);
  const [showDCmp, setShowDCmp] = useState(false);
  const [showContCon, setShowContCon] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [ESSData, setESSData] = useState([]);
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(0);
  const [dateInterval, setDateInterval] = useState(0);
  const [timeState, setTimeState] = useState(0);
  //STATES

  const showStates = {
    homeShow: showHome,
    homeShowCB: setShowHome,
    solarShow: showSolar,
    solarShowCB: setShowSolar,
    batteryShow: showBattery,
    batteryShowCB: setShowBattery,
    acmpShow: showACmp,
    acmpShowCB: setShowACmp,
    dcmpShow: showDCmp,
    dcmpShowCB: setShowDCmp,
    contConShow: showContCon,
    contConShowCB: setShowContCon,
    logsShow: showLogs,
    logsShowCB: setShowLogs,
    aboutShow: showAbout,
    aboutShowCB: setShowAbout,
    timeState: timeState,
    setTimeState: setTimeState,
    dateInterval: dateInterval,
    setDateInterval: setDateInterval,
  };

  const dateQueryStates = {
    fromDate: fromDate,
    setFromDate: setFromDate,
    toDate: toDate,
    setToDate: setToDate,
    dateInterval: dateInterval,
    setDateInterval: setDateInterval,
  };

  //REFERENCES
  const solarRef = useRef(null);
  const batteryRef = useRef(null);
  //const acgenRef = useRef(null);
  //const gridRef = useRef(null);
  //const invRef = useRef(null);
  //REFERENCES

  useEffect(() => {
    getSnapShot(setESSData);
  }, []);

  console.log("ESS DATA:", ESSData);

  return (
    <div style={{ textAlign: "center" }}>
      <HomePageHeader caption="MT ESS" />
      <Navbar states={showStates} getTimestamps={getTimestamps} />
      <div className="App">
        <InteractiveBlockDiagram
          source={ESSData}
          states={showStates}
          solarRef={solarRef}
          batteryRef={batteryRef}
        />
        {showSolar && (
          <SolarTelemetryContainer scrollRef={solarRef} source={ESSData} />
        )}
        {showBattery && (
          <BatteryTelemetryContainer scrollRef={batteryRef} source={ESSData} />
        )}
        {showDCmp && (
          <DCmeasuringPointContainer scrollRef={null} source={ESSData} />
        )}
        {showACmp && (
          <ACmeasuringPointContainer scrollRef={null} source={ESSData} />
        )}
        {showContCon && <BasicTable scrollRef={null} source={ESSData} />}
        <ScrollButton />
        {showLogs && (
          <LogQuery
            doQueryCB={queryDate}
            doIntervalQueryCB={getDateInterval}
            scrollRef={null}
            source={ESSData}
            states={dateQueryStates}
            stamps={timeState}
          />
        )}
      </div>
    </div>
  );
}

export default App;
