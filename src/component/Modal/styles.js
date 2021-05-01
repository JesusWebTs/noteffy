import styled from "styled-components";

export const ModalContainerStyled = styled.div`
  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000050;
  transition-property: backdrop-filter, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: backdropAnimation;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes backdropAnimation {
    0% {
      backdrop-filter: blur(0px);
    }
    100% {
      backdrop-filter: blur(3px);
    }
  }
`;
export const CloseButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  right: 0;
  top: 0;
  position: absolute;
  margin: 25px;
  background-color: lightblue;
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  transform: translateY(-100%) translateX(100%);
  & svg {
    width: 50px;
    height: 50px;
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: black;
    }
  }
`;

export const Modalcontent = styled.div`
  background-color: lightBlue;
  border: 1px solid white;
  border-radius: 10px;
  width: 600px;

  animation-name: moveModalContentAnimation;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.77, 0, 0.35, 1.92);

  @keyframes moveModalContentAnimation {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
