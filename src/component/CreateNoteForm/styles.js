import styled from "styled-components";
export const ContainerStyled = styled.div`
  height: 500px;
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
`;
export const TextAreaStyled = styled.textarea`
  resize: none;
  width: 100%;
  height: 300px;
  border: 1px solid blue;
  font-size: 25px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ButtonStyled = styled.button`
  background-color: lightblue;
  width: 101%;
  height: 100%;
  font-size: 25px;
`;
