import { Types } from "../constants/types";

const updateBase = (base, state) => {
  return {
    ...state,
    data: base,
  };
};

export const commonReducer = (state, action) => {
  switch (action.type) {
    case Types.INITIAL_DATA:
      return updateBase(action.payload, state);
    default:
      return state;
  }
};

export default commonReducer;
