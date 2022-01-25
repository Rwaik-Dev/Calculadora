import styled from "styled-components";

export const Container = styled.div`
  width: 99.9%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 5px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  .val{
    width: 100%;
    height: 45%;
    font-size: 23px;
  }

  .response{
    width: 100%;
    height: 55%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    font-size: 40px;
  }
  `;