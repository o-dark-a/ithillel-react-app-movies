import {React, useContext} from 'react';
import './App.css';
import { FormContextComponent } from './context/formContext';
import PersonalInfoForm from './Components/Form/PersonalInfoForm/PersonalInfoForm';
import SecurityInfoForm from './Components/Form/SecurityInfoForm/SecurityInfoForm';
import AvatarForm from './Components/Form/AvatarForm/AvatarForm';
import ConclusionForm from './Components/Form/ConclusionForm/ConclusionForm';
import SuccessForm from './Components/Form/SuccessForm/SuccessForm';

function App() {
  const [{ registrationStep }, _] = useContext(FormContextComponent);

  if (registrationStep === 1) {
    return <PersonalInfoForm />

  } else if (registrationStep === 2) {
    return <SecurityInfoForm />
  } else if (registrationStep === 3) {
    return <AvatarForm />
  } else if (registrationStep === 4) {
    return <ConclusionForm />
  } else {
    return <SuccessForm />
  }
 
}

export default App;
