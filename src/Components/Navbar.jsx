import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div style={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: "#986731" }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Foxes All Around
        </Typography>
        <div className="far-right">
          <Link to="/auth">
            <IconButton aria-label="login to facebook">
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link to="/app">
            <IconButton aria-label="show pets">
              <PetsIcon />
            </IconButton>
          </Link>
        </div>

        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
