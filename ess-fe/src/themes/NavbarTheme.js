import { createTheme } from "@mui/material/styles";

const Navbartheme = createTheme({
  status: {
    danger: "#00ffff",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#686868",
      contrastText: "#fff",
    },
  },
});

export default Navbartheme;
