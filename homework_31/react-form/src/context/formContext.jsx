import { createContext, useReducer } from "react";
import { FormReducer, initialState } from "../reducer/formReducer/FormReducer";
export const FormContextComponent = createContext({});

function FormContextProvider({ children }) {
  const [{personalInfo, securityInfo, registrationStep}, dispatch] = useReducer(FormReducer, initialState);
  return (
    <FormContextComponent.Provider value={ [{personalInfo, securityInfo, registrationStep}, dispatch] }>
      { children }
    </FormContextComponent.Provider>
  )
}

export default FormContextProvider;
