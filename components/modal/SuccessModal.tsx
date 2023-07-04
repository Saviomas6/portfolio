import React from "react";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalFooterContent,
  ModalIconWrapper,
} from "./SuccessModal.style";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FadeAnimation } from "../../styles/globalStyles";

interface I_Modal {
  toggleModal(value: boolean): void;
}

const SuccessModal = ({ toggleModal }: I_Modal) => {
  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      toggleModal(false);
    }
  };

  return (
    <ModalBody onMouseDown={handleClickOutside}>
      <FadeAnimation>
        <ModalContainer>
          <ModalIconWrapper>
            <BsFillCheckCircleFill size={30} color={"#00F700"} />
          </ModalIconWrapper>

          <ModalContent>
            Thank you for getting in touch! will get back in touch with you
            soon!
          </ModalContent>
          <ModalFooterContent>HAVE A GREAT DAY !</ModalFooterContent>
        </ModalContainer>
      </FadeAnimation>
    </ModalBody>
  );
};

export default SuccessModal;
