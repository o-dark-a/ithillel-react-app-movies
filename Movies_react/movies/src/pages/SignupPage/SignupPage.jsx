import React, { useState } from "react";
import SignupFormClasses from './SignupPage.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from "../../components/UI/InputField/InputField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const errorText = {
  textField: 'Field must contain only letters of the English alphabet. Min number of characters - 2, max - 21.',
  usernameField: 'Username must start with a lowercase letter and consist only of letters, numbers or special characters (. or _).',
  requiredField: 'The field is required',
  confirmPassField: 'Passwords must match',
}

const schema = yup.object({
  firstName: yup.string()
    .required(errorText.requiredField)
    .matches(/^[A-Za-z]{2,21}$/i, { message: errorText.textField }),
  lastName: yup.string()
    .required(errorText.requiredField)
    .matches(/^[A-Za-z]{2,21}$/i, { message: errorText.textField }),
  userName: yup.string()
    .required(errorText.requiredField)
    .matches(/^[a-z]{1}[a-zA-Z0-9_.-]+$/, { message: errorText.usernameField }),
  birthsDate: yup.date().default(() => new Date()),
  sex: yup
    .mixed()
    .oneOf(['male', 'female', 'other'])
    .defined(),
  email: yup.string().nullable().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required()
}).required();

function SignupPage() {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  const onBlur = () => {
    setPass(watch('password'));
    setConfirmPass(watch('confirmPassword'));
  }

  return (
    <form className={SignupFormClasses.signupForm} onSubmit={handleSubmit(onSubmit)}>

      <FormControl>
        <InputField label='First Name' type='text' {...register("firstName")} />
        <p className="error-msg">{errors.firstName?.message}</p>
        <InputField label='Last Name' type='text' {...register("lastName")} />
        <p className="error-msg">{errors.lastName?.message}</p>
        <InputField label='User Name' type='text' {...register("userName")} />
        <p className="error-msg">{errors.userName?.message}</p>
        <label htmlFor="">Date of Birth</label>
        <InputField type='date' {...register("birthsDate")} />
        <p className="error-msg">{errors.birthsDate?.message}</p>
      </FormControl>

      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="female"
        >
          <FormControlLabel {...register("sex")} value="female" control={<Radio />} label="Female" />
          <FormControlLabel {...register("sex")} value="male" control={<Radio />} label="Male" />
          <FormControlLabel {...register("sex")} value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <InputField label='Email' type='email' {...register("email", { required: true })} />
        <p className="error-msg">{errors.email?.message}</p>
      </FormControl>

      <FormControl>
        <InputField label='Password' type='password' {...register("password")} onBlur={() => { onBlur() }} />
        <InputField label='Confirm Password' type='password' {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Passwords must match',
                  },
        })} />
        <p className="error-msg">{errors.confirmPassField?.message}</p>
      </FormControl>

      <button type="submit">Sign Up</button>
    </form>

  )
}

export default SignupPage;