import styled from "styled-components";

import colors from "../../styles/colors";

export const NoteContainerStyled = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  min-height: 200px;
  box-shadow: 0 0 8px 0 black;
  text-align: center;
  position: relative;
  background-color: ${colors.color_1};
  color: white;
  cursor: pointer;
  animation-name: NotesAnimates;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  &:hover {
    div {
      opacity: 1;
    }
  }

  @keyframes NotesAnimates {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const NoteCheckBoxStyled = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  overflow: hidden;
  transform: translateX(50%) translateY(-50%);
  border: 8px solid ${colors.color_2};
  box-shadow: 0 0 8px 0 black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  & input {
    z-index: 20;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    outline: none;
  }
`;

export const NoteTitleStyled = styled.h2`
  position: relative;
  display: inline-block;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background: white;
    transform: translateY(30px);
  }
`;

export const NoteControlsStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: min-content;
  height: 100%;
  background: #00000099;
  padding: 0 5px;
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  z-index: 10;
`;

export const ControlButtonStyled = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: #00000055;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${colors.color_1};
  }
`;

export const CreatedAtStyled = styled.small`
  position: absolute;
  bottom: 5px;
  right: 5px;
  text-align: right;
`;

export const TimeVar = styled.small`



`;
