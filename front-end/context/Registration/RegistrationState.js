import React, { useReducer } from "react";
import RegistrationReducer from "./RegistrationReducer";
import RegistrationContext from "./RegistrationContext";

//Provider
const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegistrationReducer, initialState);

  return (
    <RegistrationContext.Provider>
      {{}}
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationState;
