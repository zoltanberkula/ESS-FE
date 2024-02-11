//DEFAULT IMPORTS
import React from "react";
//DEFAULT IMPORTS

//FILES
import blockDiagram from "../img/ESS_BLOCK_DIAGRAM_0v2.png";
//FILES

//MATERIAL-UI
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { IconButton } from "@mui/material";
import { Switch } from "@mui/material";
//MATERIAL-UI

let solarChecked = false;
let bmsChecked = false;
let acgenChecked = false;
let gridChecked = false;
let invChecked = false;
let batteryChecked = false;

const scrollToSection = (elementRef) => {
  console.log(elementRef);
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export const InteractiveBlockDiagram = (props) => {
  console.log("BD PROPS:", props);
  return (
    <div className="blockDiagramWrapper">
      <img src={blockDiagram} alt=""></img>
      <div className="solarHoverBox1">
        <div className="solar-info-box1">
          <div className="info-box-header">
            <b>SOLAR DATA</b>
          </div>
          <ul>
            <li>
              <b>Voltage: </b> 400
              {/* {props.source[0].data.acrelData.DCVoltage} */}
            </li>
            <li>
              <b>Current: </b> 20
              {/* {props.source[0].acrelData.DCCurrent} */}
            </li>
            <li>
              <b>Power: </b> 4.5
              {/* {props.source[0].acrelData.Power} */}
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "yellow" }}>ACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                props.states.solarShowCB(!props.states.solarShow);
                solarChecked = !solarChecked;
              }}
            ></Switch>
            <IconButton
              disabled={!solarChecked ? true : false}
              onClick={() => scrollToSection(props.solarRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="solarHoverBox2">
        <div className="solar-info-box2">
          <div className="info-box-header">
            <b>SOLAR DATA</b>
          </div>
          <ul>
            <li>
              <b>Voltage: </b> 400.3
              {/* {props.source[0].acrelData.DCVoltage} */}
            </li>
            <li>
              <b>Current: </b> 31.3
              {/* {props.source[0].acrelData.DCCurrent} */}
            </li>
            <li>
              <b>Power: </b> 11.198
              {/* {props.source[0].acrelData.Power} */}
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "yellow" }}>ACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                props.states.solarShowCB(!props.states.solarShow);
                solarChecked = !solarChecked;
              }}
            >
              <StackedLineChartSharpIcon />
            </Switch>
            <IconButton
              disabled={!solarChecked ? true : false}
              onClick={() => scrollToSection(props.solarRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="bmsHoverBox1">
        <div className="bms-info-box1">
          <div className="info-box-header">
            <b>BMS DATA</b>
          </div>
          <ul>
            <li>
              <b>Voltage: </b>398.7
              {/* {props.source[0].batteryData.TotalVoltage} */}
            </li>
            <li>
              <b>Current: </b>73.1
              {/* {props.source[0].batteryData.TotalCurrent} */}
            </li>
            <li>
              <b>SOC: </b>87%
              {/* {props.source[0].batteryData.SystemSOC} */}
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "yellow" }}>ACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                props.states.batteryShowCB(!props.states.batteryShow);
                bmsChecked = !bmsChecked;
              }}
            >
              <StackedLineChartSharpIcon />
            </Switch>
            <IconButton
              disabled={!bmsChecked ? true : false}
              onClick={() => scrollToSection(props.batteryRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="acGenHoverBox1">
        <div className="acgen-info-box1">
          <div className="info-box-header">
            <b>GENERATOR</b>
          </div>
          <ul>
            <li>
              <b>L1V: </b>230.5
              {/* {props.source[0].lumelData.L1Voltage} */}
            </li>
            <li>
              <b>L2V: </b>230.5
              {/* {props.source[0].lumelData.L2Voltage} */}
            </li>
            <li>
              <b>L3V: </b>230.5
              {/* {props.source[0].lumelData.L3Voltage} */}
            </li>
            <li>
              <b>Current: </b> 36.3
            </li>
            <li>
              <b>Power: </b> 8kW
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "orange" }}>INACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                scrollToSection(props.acgenRef);
                acgenChecked = !acgenChecked;
              }}
            ></Switch>
            <IconButton
              disabled={!acgenChecked ? true : false}
              onClick={() => scrollToSection(props.acgenRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="pwGridHoverBox1">
        <div className="pwgrid-info-box1">
          <div className="info-box-header">
            <b>POWER GRID</b>
          </div>
          <ul>
            <li>
              <b>L1V: </b> 230.5
            </li>
            <li>
              <b>L2V: </b> 230.5
            </li>
            <li>
              <b>L3V: </b> 230.5
            </li>
            <li>
              <b>Current:</b> 36.3
            </li>
            <li>
              <b>Power:</b> 8kW
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "orange" }}>INACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                scrollToSection(props.genRef);
                gridChecked = !gridChecked;
              }}
            ></Switch>
            <IconButton
              disabled={!gridChecked ? true : false}
              onClick={() => scrollToSection(props.gridRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="invHoverBox1">
        <div className="inv-info-box1">
          <div className="info-box-header">
            <b>INVERTER</b>
          </div>
          <ul>
            <li>
              <b>L1V: </b>230.5
            </li>
            <li>
              <b>L2V: </b>230.5
            </li>
            <li>
              <b>L3V: </b>230.5
            </li>
            <li>
              <b>Current: </b>36.3
            </li>
            <li>
              <b>Power: </b>8kW
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "yellow" }}>ACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                scrollToSection(props.genRef);
                invChecked = !invChecked;
              }}
            ></Switch>
            <IconButton
              disabled={!invChecked ? true : false}
              onClick={() => scrollToSection(props.invRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
      <div className="batHoverBox1">
        <div className="bat-info-box1">
          <div className="info-box-header">
            <b>BATTERY</b>
          </div>
          <ul>
            <li>
              <b>Voltage: </b>400.5
            </li>
            <li>
              <b>Current: </b>75.3
            </li>
            <li>
              <b>SOC: </b>89%
            </li>
            <li>
              <b>SOH: </b>77 °C
            </li>
            <li>
              <b>Status: </b>
              <span style={{ color: "yellow" }}>ACTIVE</span>
            </li>
            <Switch
              color="default"
              size="small"
              onClick={() => {
                scrollToSection(props.genRef);
                batteryChecked = !batteryChecked;
              }}
            >
              <StackedLineChartSharpIcon />
            </Switch>
            <IconButton
              disabled={!batteryChecked ? true : false}
              onClick={() => scrollToSection(props.batteryRef)}
            >
              <ArrowCircleDownIcon />
            </IconButton>
          </ul>
        </div>
      </div>
    </div>
  );
};
