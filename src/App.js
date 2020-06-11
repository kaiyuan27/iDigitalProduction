/* global GLOBAL_CONFIG*/

import React, { useState, useEffect, useReducer, useContext } from "react";

import { LocalService } from "./scripts/services/api";
import BaseContext from "./scripts/models/baseContext";
import NavContext from "./scripts/models/NavContext";
import appReducer from "./scripts/reducer/appReducer";
import { Types } from "./scripts/constants/types";

import Base from "./base";
import "./styles/main.scss";

function App() {
  const basecontext = useContext(BaseContext);

  const [initial, setInitialState] = useState({
    currentPage: "home",
    loading: false,
  });
  const [state, dispatch] = useReducer(appReducer, initial);

  useEffect(() => {
    extractBase();
  }, []);

  const extractBase = () => {
    LocalService(GLOBAL_CONFIG.DATA).then((result) => {
      const responseJson = result;
      updateBase(responseJson);
    });
  };

  const updateBase = (base, stype = Types.INITIAL_DATA) => {
    console.log(base, stype);
    
    dispatch({
      type: stype,
      payload: base
    })
  };

  return (
    <BaseContext.Provider
      value={{
        ...state,
        updateBase
      }} 
    >
      <Base/>
    </BaseContext.Provider>
  );
}

export default App;
