import { useContext, useState, createRef } from "react";
import { useForm } from "react-hook-form";
import { FormContextComponent } from "../../../context/formContext";
import AvatarClasses from './AvatarForm.module.scss';
import PrevStepBtn from "../FormControls/PrevStepBtn/PrevStepBtn";
import NextStepBtn from "../FormControls/NextStepBtn/NextStepBtn";
import { changeStep } from "../../../reducer/formReducer/FormReducer";
import { updateAvatar } from "../../../reducer/formReducer/FormReducer";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ChooseFileBtn from '../FormControls/ChooseFileBtn/ChooseFileBtn';

function AvatarForm() {
  const { register, handleSubmit } = useForm();
  const [{ registrationStep, personalInfo: { avatarImg } }, dispatch] = useContext(FormContextComponent);
  const [avaImg, setAvaImg] = useState(avatarImg);

  const onSubmit = () => {
    dispatch(changeStep(registrationStep + 1))
    dispatch(updateAvatar(avaImg));
  }

  const fileInputRef = createRef();
  function choseFile() {
    fileInputRef.current.click();
  }

  const updateImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setAvaImg({
        src: reader.result,
        name: file.name
      })
    }
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
        <img className={AvatarClasses.avatarImg} src={avaImg.src} alt={avaImg.name} />
        <FormControl sx={{ display: 'flex' }}>
          <ChooseFileBtn choseFile={choseFile} />
          <label>
            <TextField
              sx={{ display: "none" }}
              type="file"
              {...register("avatarImg")}
              onChange={updateImage}
              ref={fileInputRef}
            />
          </label>
          <PrevStepBtn value='Back' />
          <NextStepBtn value='Next' />
        </FormControl>
      </form>
    </Box>

  )
}

export default AvatarForm;
