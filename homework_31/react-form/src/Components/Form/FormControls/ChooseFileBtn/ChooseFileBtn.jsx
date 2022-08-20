import Button from '@mui/material/Button';

function ChooseFileBtn({choseFile}) {
  return <Button onClick={choseFile} color="secondary" type="button">Choose avatar</Button>
}

export default ChooseFileBtn;
