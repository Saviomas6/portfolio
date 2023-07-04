import styled from "styled-components";
export const ScrollTopButtonContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ab3b61;
  position: absolute;
  right: 40px;
  bottom: 20px;
  z-index: 10;
  cursor: pointer;
  :hover {
    color: #000;
    background-color: #fff;
  }
`;
