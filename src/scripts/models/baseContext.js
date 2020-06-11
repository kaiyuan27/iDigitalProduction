import { createContext } from "react";

const BaseContext = createContext({
  data: {},
  updateBase: (base) => {},
});

export default BaseContext;
