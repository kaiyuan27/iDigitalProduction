import { createContext } from "react";

const NavContext = createContext({
  currentNav: {},
  updateNav: (base) => {}
});

export default NavContext;

