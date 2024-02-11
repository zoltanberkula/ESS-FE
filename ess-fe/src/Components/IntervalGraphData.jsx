// // import * as React from "react";
// // import Box from "@mui/material/Box";
// // import Checkbox from "@mui/material/Checkbox";
// // import { FormControlLabel } from "@mui/material";
// // import { CreateDataLabel } from "./CreateDataLabel";

// // export default function IndeterminateCheckbox() {
// // const [checked, setChecked] = React.useState([true, false]);

// // const AcrelCh1Fields = ["dcVoltage", "dcCurrent", "dcPower", "dcConsumption"];
// //   const AcrelCh2Fields = ["dcVoltage", "dcCurrent", "dcPower", "dcConsumption"];
// //   const BatteryFields = ["voltage", "current", "soc"];
// //   const OrnoFields = ["L1V", "L2V", "L3V", "L1C", "L2C", "L3C", "energy"];
// //   const handleChange1 = (event) => {
// //     setChecked([event.target.checked, event.target.checked]);
// //   };

// //   return (
// //     <div style={{ border: "1px solid" }}>
// //       <div>
// //         {AcrelCh1Fields.map((field) => (
// //           <FormControlLabel
// //             label={field}
// //             control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
// //           />
// //         ))}
// //       </div>
// //       <div>
// //         {AcrelCh2Fields.map((field) => (
// //           <FormControlLabel
// //             label={field}
// //             control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
// //           />
// //         ))}
// //       </div>
// //       <div>
// //         {BatteryFields.map((field) => (
// //           <FormControlLabel
// //             label={field}
// //             control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
// //           />
// //         ))}
// //       </div>
// //       <div>
// //         {OrnoFields.map((field) => (
// //           <FormControlLabel
// //             label={field}
// //             control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import { FormControlLabel } from "@mui/material";
// import { useState } from "react";

// export default function SimpleAccordion() {
//   const [voltageGlobal, setVoltageGlobal] = useState(false);
//   const [currentGlobal, setCurrentGlobal] = useState(false);
//   const [powerGlobal, setPowerGlobal] = useState(false);
//   const [energyGlobal, setEnergyGlobal] = useState(false);
//   const [dcEmd1VFlag, setdcEmd1VFlag] = useState(false);
//   const [acEmd1VFlag, setacEmd1VFlag] = useState(false);
//   const [dcEmd2VFlag, setdcEmd2VFlag] = useState(false);
//   const [batteryVFlag, setbatteryVFlag] = useState(false);
//   const [dcEmd1CFlag, setdcEmd1CFlag] = useState(false);
//   const [acEmd1CFlag, setacEmd1CFlag] = useState(false);
//   const [dcEmd2CFlag, setdcEmd2CFlag] = useState(false);
//   const [batteryCFlag, setbatteryCFlag] = useState(false);
//   const [dcEmd1PFlag, setdcEmd1PFlag] = useState(false);
//   const [acEmd1PFlag, setacEmd1PFlag] = useState(false);
//   const [dcEmd2PFlag, setdcEmd2PFlag] = useState(false);
//   const [dcEmd1EFlag, setdcEmd1EFlag] = useState(false);
//   const [acEmd1EFlag, setacEmd1EFlag] = useState(false);
//   const [dcEmd2EFlag, setdcEmd2EFlag] = useState(false);
//   const [batterySOCFlag, setbatterySOCFlag] = useState(false);

//   const handleChange = (event) => {
//     console.log(event.target.name, event.target.checked);
//     console.log(event);
//     if (
//       event.target.name === "VoltageGlobal" &&
//       event.target.checked === true
//     ) {
//       setVoltageGlobal(true);
//       setdcEmd1VFlag(true);
//       setdcEmd2VFlag(true);
//       setacEmd1VFlag(true);
//       setbatteryVFlag(true);
//     } else {
//       setVoltageGlobal(false);
//       setdcEmd1VFlag(false);
//       setdcEmd2VFlag(false);
//       setacEmd1VFlag(false);
//       setbatteryVFlag(false);
//     }

//     if (
//       event.target.name === "CurrentGlobal" &&
//       event.target.checked === true
//     ) {
//       setCurrentGlobal(true);
//       setdcEmd1CFlag(true);
//       setdcEmd2CFlag(true);
//       setacEmd1CFlag(true);
//       setbatteryCFlag(true);
//     } else {
//       setCurrentGlobal(false);
//       setdcEmd1CFlag(false);
//       setdcEmd2CFlag(false);
//       setacEmd1CFlag(false);
//       setbatteryCFlag(false);
//     }

//     if (event.target.name === "PowerGlobal" && event.target.checked === true) {
//       setPowerGlobal(true);
//       setdcEmd1PFlag(true);
//       setdcEmd2PFlag(true);
//       setacEmd1PFlag(true);
//     } else {
//       setPowerGlobal(false);
//       setdcEmd1PFlag(false);
//       setdcEmd2PFlag(false);
//       setacEmd1PFlag(false);
//     }

//     if (event.target.name === "EnergyGlobal" && event.target.checked === true) {
//       setEnergyGlobal(true);
//       setdcEmd1EFlag(true);
//       setdcEmd2EFlag(true);
//       setacEmd1EFlag(true);
//     } else {
//       setEnergyGlobal(false);
//       setdcEmd1EFlag(false);
//       setdcEmd2EFlag(false);
//       setacEmd1EFlag(false);
//     }

//     // if (
//     //   event.target.name === "dcEmd1Voltage" &&
//     //   event.target.checked === true
//     // ) {
//     //   setEnergyGlobal(false);
//     //   setdcEmd1VFlag(dcEmd1VFlag);
//     // } else {
//     //   //setEnergyGlobal(false);
//     //   setdcEmd1VFlag(!dcEmd1VFlag);
//     // }
//     // switch (event) {
//     //   case event.target.name === "VoltageGlobal" &&
//     //     event.target.checked === true:
//     //     setVoltageGlobal(true);
//     //     setdcEmd1VFlag(true);
//     //     setdcEmd2VFlag(true);
//     //     setacEmd1VFlag(true);
//     //     setbatteryVFlag(true);
//     //     break;
//     //   case "CurrentGlobal":
//     //     setCurrentGlobal(true);
//     //     setdcEmd1CFlag(true);
//     //     setdcEmd2CFlag(true);
//     //     setacEmd1CFlag(true);
//     //     setbatteryCFlag(true);
//     //     break;
//     //   case "PowerGlobal":
//     //     setPowerGlobal(true);
//     //     setdcEmd1PFlag(true);
//     //     setdcEmd2PFlag(true);
//     //     setacEmd1PFlag(true);
//     //     break;
//     //   case "EnergyGlobal":
//     //     setEnergyGlobal(true);
//     //     setdcEmd1EFlag(true);
//     //     setdcEmd2EFlag(true);
//     //     setacEmd1EFlag(true);
//     //     break;
//     //   case "dcEmd1Voltage":
//     //     setdcEmd1VFlag(true);
//     //     break;
//     //   default:
//     //     setdcEmd1VFlag(false);
//     //     setVoltageGlobal(false);
//     //     setCurrentGlobal(false);
//     //     setPowerGlobal(false);
//     //     setEnergyGlobal(false);
//     //     setdcEmd1CFlag(false);
//     //     setdcEmd2CFlag(false);
//     //     setacEmd1CFlag(false);
//     //     setbatteryCFlag(false);
//     //     break;
//     // }
//   };

//   return (
//     <div>
//       <Accordion style={{ width: "75%", display: "flex", left: "115px" }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Data Vectors</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//             <FormControlLabel
//               label="Voltage"
//               control={
//                 <Checkbox
//                   name="VoltageGlobal"
//                   checked={voltageGlobal}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               label="Current"
//               control={
//                 <Checkbox
//                   name="CurrentGlobal"
//                   checked={currentGlobal}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               label="Power"
//               control={
//                 <Checkbox
//                   name="PowerGlobal"
//                   checked={powerGlobal}
//                   onChange={handleChange}
//                 />
//               }
//             />
//             <FormControlLabel
//               label="Energy"
//               control={
//                 <Checkbox
//                   name="EnergyGlobal"
//                   checked={energyGlobal}
//                   onChange={handleChange}
//                 />
//               }
//             />
//           </div>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>DC EMD 1</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div>
//                 <FormControlLabel
//                   label="Voltage"
//                   control={
//                     <Checkbox
//                       name="dcEmd1Voltage"
//                       checked={dcEmd1VFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Current"
//                   control={
//                     <Checkbox
//                       name="dcEmd1Current"
//                       checked={dcEmd1CFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Power"
//                   control={
//                     <Checkbox
//                       name="dcEmd1Power"
//                       checked={dcEmd1PFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Energy"
//                   control={
//                     <Checkbox
//                       name="dcEmd1Energy"
//                       checked={dcEmd1EFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//               </div>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>DC EMD 2</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div>
//                 <FormControlLabel
//                   label="Voltage"
//                   control={
//                     <Checkbox
//                       name="dcEmd2Voltage"
//                       checked={dcEmd2VFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Current"
//                   control={
//                     <Checkbox
//                       name="dcEmd2Current"
//                       checked={dcEmd2CFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Power"
//                   control={
//                     <Checkbox
//                       name="dcEmd2Power"
//                       checked={dcEmd2PFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Energy"
//                   control={
//                     <Checkbox
//                       name="dcEmd2Energy"
//                       checked={dcEmd2EFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//               </div>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>AC EMD 1</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div>
//                 <FormControlLabel
//                   label="Voltage"
//                   control={
//                     <Checkbox
//                       name="acEmd1Voltage"
//                       checked={acEmd1VFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Current"
//                   control={
//                     <Checkbox
//                       name="acEmd1Current"
//                       checked={acEmd1CFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Power"
//                   control={
//                     <Checkbox
//                       name="acEmd1Power"
//                       checked={acEmd1PFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Energy"
//                   control={
//                     <Checkbox
//                       name="acEmd1Energy"
//                       checked={acEmd1EFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//               </div>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>Battery</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div>
//                 <FormControlLabel
//                   label="Voltage"
//                   control={
//                     <Checkbox checked={batteryVFlag} onChange={handleChange} />
//                   }
//                 />
//                 <FormControlLabel
//                   label="Current"
//                   control={
//                     <Checkbox checked={batteryCFlag} onChange={handleChange} />
//                   }
//                 />
//                 <FormControlLabel
//                   label="SOC"
//                   control={
//                     <Checkbox
//                       checked={batterySOCFlag}
//                       onChange={handleChange}
//                     />
//                   }
//                 />
//               </div>
//             </AccordionDetails>
//           </Accordion>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
