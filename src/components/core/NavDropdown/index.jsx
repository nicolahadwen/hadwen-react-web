import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import React from "react";
import {Link} from "react-router-dom";

const NavDropdown = ({handleClose, anchorEl}) => (
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
      <Link to={'/'}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
      <Link to={'/user'}><MenuItem onClick={handleClose}>Create User</MenuItem></Link>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
);

export default NavDropdown;