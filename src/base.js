/* global GLOBAL_CONFIG*/

import React, { useState, useReducer, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./scripts/view/base/header";
import { Footer } from "./scripts/view/base/footer";
import { Types } from "./scripts/constants/types";

import NavContext from "./scripts/models/navContext";
import BaseContext from "./scripts/models/baseContext";

import appReducer from "./scripts/reducer/appReducer";

import Home from "./scripts/view/pages/home";
import "./styles/main.scss";

export const Base = (props) => {
  const base = useContext(BaseContext);

  const [initial, setInitialState] = useState({
    currentPage: "home",
    loading: false,
  });

  const [state, dispatch] = useReducer(appReducer, initial);

  const updateCurrentNav = (nav) => {
    dispatch({
      type: Types.CURRENT_NAV,
      payload: nav,
    });
  };
  if (base.data) {
    return (
      <div>
        <Router>
          <Header {...props} base={props.base} />
          <Route
            path="/"
            exact
            component={(props) => <Home {...props} base={props.base} />}
          />
          <Footer base={props.base} />
        </Router>
      </div>
    );
  } else {
    return <div>test base data empty</div>;
  }
};

export default Base;
