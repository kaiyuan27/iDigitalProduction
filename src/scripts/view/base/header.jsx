import React, { useState, useEffect, useReducer, useContext } from "react";
import { Toolbar, Button } from "@material-ui/core";

export const Header = () => {
  const logo = "/img/logo.png";
  return (
    <header>
      <container>
        <Toolbar component="nav" variant="dense">
          <img src={logo} alt="logo" />
          <Button>Home</Button>
        </Toolbar>
      </container>
    </header>
  );
};
