import styled from "styled-components";
import colors from "../../styles/colors";
export const ContainerStyled = styled.div`
  background: white;
  margin: 15px;
  border-radius: 8px;
  padding: 20px;
`;
export const LabelStyled = styled.label`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: blue;
    bottom: -2px;
  }
`;
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  justify-content: space-evenly;
  height: 100%;
`;
export const InputStyled = styled.input`
  border: none;
  border-bottom: 2px solid blue;
  outline: none;
  width: 100%;
  font-size: 25px;
  ${({ date }) => (date ? "height: 30px;" : null)}
`;
export const TextAreaStyled = styled.textarea`
  resize: none;
  width: 100%;
  height: 300px;
  border: 1px solid blue;
  font-size: 25px;
  outline: none;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ButtonStyled = styled.button`
  background-color: ${colors.color_1};
  width: 101%;
  height: 100%;
  font-size: 25px;
  cursor: pointer;
  color: white;
  margin-top: 5px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${colors.color_2};
  }
`;
export const FieldError = styled.div`
  border: 2px solid red;
  order: -1;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  margin-top: 0;
  background-color: salmon;
  color: white;

  animation-name: errorAnimated;
  animation-timing-function: ease;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  order: 5;
  @keyframes errorAnimated {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
