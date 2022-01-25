import React from "react";
import { Container } from "./ButtonsStyles";

interface IButtonsProps{
  label?: number | string;
  color: string;
  textcolor: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Buttons: React.FC<IButtonsProps> = ({label, color, textcolor, onClick}) => {
 

  return (
    <Container color={color} textcolor = {textcolor}>
      <button color={color} onClick={onClick} >
        {label}
      </button>
    </Container>
  );
};

export default Buttons;
