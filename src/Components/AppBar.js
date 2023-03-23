import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            //component="div"
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            Veradigm Online Assesment
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
