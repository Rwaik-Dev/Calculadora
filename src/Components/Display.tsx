import React from "react";
import { Container } from "./DisplayStyles";

interface IPropsDisplay{
  valor: string,
  res:string
}


const Display: React.FC<IPropsDisplay> = ({valor, res}) => {
  return (
    <Container>
      <span className="val">{valor}</span>
      <span className="response">{res}</span>
    </Container>
  );
};


export default Display;