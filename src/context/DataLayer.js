import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

const DataLayer = ({ reducer, initialState, children }) => {
  return (
    <div>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </div>
  );
};

const useStateContext = () => useContext(StateContext);

export { DataLayer };

export default useStateContext;
