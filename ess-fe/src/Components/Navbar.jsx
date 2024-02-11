import React from "react";
import "../App.css";

//MATERIAL UI
import { Button, ButtonGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//MATERIAL UI

//THEMES
import Navbartheme from "../themes/NavbarTheme";
//THEMES

export const Navbar = (props) => {
  return (
    <div className="Navbar">
      <ul>
        <ThemeProvider theme={Navbartheme}>
          <ButtonGroup>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() => props.states.homeShowCB(props.states.homeShow)}
              >
                <span style={{ color: "white" }}>About</span>
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() =>
                  props.states.solarShowCB(!props.states.solarShow)
                }
              >
                Solar Data
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() =>
                  props.states.batteryShowCB(!props.states.batteryShow)
                }
              >
                Battery Data
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() => props.states.dcmpShowCB(!props.states.dcmpShow)}
              >
                DC EMD DATA
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() => props.states.acmpShowCB(!props.states.acmpShow)}
              >
                AC EMD DATA
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() =>
                  props.states.contConShowCB(!props.states.contConShow)
                }
              >
                Contactor States
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() =>
                  props.states.contConShowCB(!props.states.contConShow)
                }
              >
                Weather
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="neutral"
                onClick={() => {
                  props.states.logsShowCB(!props.states.logsShow);
                  setTimeout(() => {
                    props.getTimestamps(props.states.setTimeState);
                  }, 300);
                }}
              >
                Logs
              </Button>
            </li>
          </ButtonGroup>
        </ThemeProvider>
      </ul>
    </div>
  );
};
