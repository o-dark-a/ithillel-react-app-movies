import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import PrevStepBtn from "../FormControls/PrevStepBtn/PrevStepBtn";
import NextStepBtn from "../FormControls/NextStepBtn/NextStepBtn";
import { FormContextComponent } from "../../../context/formContext";
import AvatarClasses from './ConclusionForm.module.scss';
import { changeStep } from "../../../reducer/formReducer/FormReducer";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

function ConclusionForm() {
  const { _, handleSubmit } = useForm();
  const [{ personalInfo, registrationStep }, dispatch] = useContext(FormContextComponent);

  const onSubmit = () => {
    dispatch(changeStep(registrationStep + 1));
  }

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
          <img className={AvatarClasses.avatarImg} src={personalInfo.avatarImg.src} alt={personalInfo.avatarImg.name} />
          <p className={AvatarClasses.formParagraph}>Your name: {personalInfo.firstName} {personalInfo.lastName}</p>
          <p className={AvatarClasses.formParagraph}>Your email: {personalInfo.email}</p>
          <PrevStepBtn value='Back' />
          <NextStepBtn value='Finish' />
        </FormControl>
      </form>
    </Box>
  )
}

export default ConclusionForm;
