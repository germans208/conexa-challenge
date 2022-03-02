import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { ConexaContext } from '../context';

const CustomButton = ({ character }) => {
  const appContext = useContext(ConexaContext);
  const { queryEspisodes } = appContext;

  const handleClick = (character, e) => {
    e.preventDefault();
    queryEspisodes(character);
  }

  return (
    <Button
      variant="contained"
      onClick={(e) => handleClick(character, e)}
      key={character}
    >
      Click
    </Button>
  );
};

export default CustomButton;
