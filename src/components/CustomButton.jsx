import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { ConexaContext } from '../context';

const CustomButton = ({ character, idClick }) => {
  const appContext = useContext(ConexaContext);
  const { queryEspisodes } = appContext;

  const handleClick = (character, idClick, e) => {
    e.preventDefault();
    queryEspisodes(character, idClick);

    //document.getElementById(`${character}_${idClick}`).disabled = true;

  }

  return (
    <Button
      variant="contained"
      onClick={(e) => handleClick(character, idClick, e)}
      key={`${character}_${idClick}`}
      id={`${character}_${idClick}`}
      
    >
      Click
    </Button>
  );
};

export default CustomButton;
