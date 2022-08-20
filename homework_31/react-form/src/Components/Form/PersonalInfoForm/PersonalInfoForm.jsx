import { useContext } from "react";
import { useForm } from "react-hook-form";
import { updatePersonalInfo } from "../../../reducer/formReducer/FormReducer";
import { FormContextComponent } from "../../../context/formContext";
import NextStepBtn from "../FormControls/NextStepBtn/NextStepBtn";
import { changeStep } from "../../../reducer/formReducer/FormReducer";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const errorText = {
  textField: 'Field must contain only letters of the Russian and English alphabets',
  requiredField: 'The field is required',
}

const schema = yup.object({
  firstName: yup.string().matches(/^[A-Za-zА-Яа-я]+$/i, { message: errorText.textField }).required(errorText.requiredField),
  lastName: yup.string().matches(/^[A-Za-zА-Яа-я]+$/i, { message: errorText.textField }).required(errorText.requiredFiel),
  email: yup.string().email(errorText.emailField).required(errorText.requiredField),
}).required();

function PersonalInfoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [{ registrationStep, personalInfo }, dispatch] = useContext(FormContextComponent);

  const onSubmit = data => {
    dispatch(changeStep(registrationStep + 1))
    dispatch(updatePersonalInfo(data));
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
            label="firstName*"
            type="text" defaultValue={personalInfo.firstName} {...register("firstName")}
          />
          <p className="error-msg">{errors.firstName?.message}</p>
          <TextField
            label="lastName*"
            type="text" defaultValue={personalInfo.lastName} {...register("lastName")}
          />
          <p className="error-msg">{errors.lastName?.message}</p>
          <TextField
            label="email*"
            type="email" defaultValue={personalInfo.email} {...register("email")}
          />
          <p className="error-msg">{errors.email?.message}</p>

          <NextStepBtn value='Next' />
        </FormControl>
      </form>
    </Box>

  )
}

export default PersonalInfoForm;
