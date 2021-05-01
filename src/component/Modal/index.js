import React from "react";
import ReactDOM from "react-dom";
import CancelIcon from "@material-ui/icons/Cancel";

//Styles
import {
  ModalContainerStyled,
  CloseButtonStyled,
  Modalcontent,
} from "./styles";

export default function Modal({ children, show, closeModal }) {
  if (show) {
    return ReactDOM.createPortal(
      <ModalContainerStyled>
        <Modalcontent>
          <CloseButtonStyled onClick={closeModal}>
            <CancelIcon />
          </CloseButtonStyled>
          {children}
        </Modalcontent>
      </ModalContainerStyled>,
      document.getElementById("root-portal")
    );
  } else return null;
}
