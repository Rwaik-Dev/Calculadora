import styled from "styled-components";

interface IContainerProps{
  color: string;
  textcolor: string
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 100px;
  > button {
    background-color: ${props => props.color};;
    width: 100%;
    height: 100%;
    border: solid 0.1px grey;
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.textcolor}
  
    }
`;
