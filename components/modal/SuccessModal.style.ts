import styled from "styled-components";
export const ModalBody = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  min-height: 200px;
  width: 350px;
  border-radius: 10px;
  background-color: #242424;
  border: 2px solid #ab3b61;
  padding: 10px;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;
export const ModalIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

export const ModalContent = styled.div`
  font-size: 16px;
  font-family: "Roboto500";
  color: #fff;
  margin: 25px 0;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ModalFooterContent = styled.div`
  font-size: 18px;
  font-family: "Roboto500";
  color: #fff;
  margin: 15px 0;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
