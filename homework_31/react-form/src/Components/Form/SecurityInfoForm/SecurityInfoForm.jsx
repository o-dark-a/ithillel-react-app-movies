import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { updateSecurityInfo } from "../../../reducer/formReducer/FormReducer";
import { FormContextComponent } from "../../../context/formContext";
import PrevStepBtn from "../FormControls/PrevStepBtn/PrevStepBtn";
import NextStepBtn from "../FormControls/NextStepBtn/NextStepBtn";
import { changeStep } from "../../../reducer/formReducer/FormReducer";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const errorText = {
  noMatch: 'Passwords do not match',
  requiredField: 'The field is required',
}
const schema = yup.object({
  password: yup.string().required(errorText.requiredField),
  confirmPassword: yup.string().required(errorText.requiredFiel),
}).required();

function SecurityInfoForm() {
  const [isPassMatch, setMatchStatus] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [{ securityInfo, registrationStep }, dispatch] = useContext(FormContextComponent);

  function checkPasswordsMatch(pass1, pass2) {
    if (pass1 === pass2) {
      return true;
    } else {
      setMatchStatus(false);
    }
  }

  const onSubmit = securityInfo => {
    if (checkPasswordsMatch(watch('password'), watch('confirmPassword'))) {
      dispatch(changeStep(registrationStep + 1))
      dispatch(updateSecurityInfo(securityInfo));
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: 'primary.white',
        '&:hover': {
          backgroundColor: 'primary',
          opacity: [0.9, 0.8, 0.7],
        },
        p: "10px",
        margin: "0 auto",
      }}

    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ display: 'flex' }}>
          <TextField
            label="password*"
            type="password" defaultValue={securityInfo.password} {...register("password")}
          />
          <p className="error-msg">{errors.password?.message}</p>
          <TextField
            label="confirm password*"
            type="password" {...register("confirmPassword")}
          />
          <p className="error-msg">{errors.confirmPassword?.message}</p>
          <p className="error-msg">{!isPassMatch ? errorText.noMatch : null}</p>
          <PrevStepBtn value='Back' />
          <NextStepBtn value='Next' />
        </FormControl>
      </form>
    </Box>

  )
}

export default SecurityInfoForm;
