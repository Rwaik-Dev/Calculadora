import styled from "styled-components";

export const Container = styled.div`
  background: rgb(54, 48, 149);
  background: linear-gradient(
    90deg,
    rgba(54, 48, 149, 1) 0%,
    rgba(92, 95, 186, 1) 62%,
    rgba(232, 211, 211, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyCalculator = styled.div`
  margin-top: 80px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;

  .divs {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
  }
`;

export const Numbers = styled.div`
  width: 100%;
`;

export const Simbols = styled.div`
  width: 35%;
`;


export const Calculer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
