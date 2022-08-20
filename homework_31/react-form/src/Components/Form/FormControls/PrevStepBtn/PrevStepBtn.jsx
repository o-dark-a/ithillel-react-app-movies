import { useContext } from "react";
import { FormContextComponent } from '../../../../context/formContext';
import { changeStep } from '../../../../reducer/formReducer/FormReducer';
import Button from '@mui/material/Button';

function PrevStepBtn({value}) {
  const [{ registrationStep }, dispatch] = useContext(FormContextComponent);
  return <Button fullWidth sx={{ marginBottom: "5px" }} variant="outlined" onClick={() => dispatch(changeStep(registrationStep - 1))} type="button">{value}</Button>
}

export default PrevStepBtn;
