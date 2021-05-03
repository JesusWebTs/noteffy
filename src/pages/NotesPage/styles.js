import styled from "styled-components";

export const NotesContainerStyled = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CreateNoteButton = styled.button`
  background-color: #458edf;
  width: 150px;
  height: 200px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  border-radius: 8px;
  border: 5px dashed black;
  font-size: 25px;
  &:hover {
    background-color: #670ff5;
  }
`;
