import { useContext } from "react";
import { FormContextComponent } from "../../../context/formContext";
import Box from '@mui/material/Box';

function SuccessForm() {
  const [{ personalInfo }, _] = useContext(FormContextComponent);
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
      <div>
        <h1>Done!</h1>
        <h3>Welcome, {personalInfo.firstName} {personalInfo.lastName}.</h3>
      </div>
    </Box>

  )
}

export default SuccessForm;