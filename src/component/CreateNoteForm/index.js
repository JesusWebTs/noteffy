import React, { useState } from "react";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TextAreaStyled,
  LabelStyled,
  ButtonStyled,
  InputContainer,
} from "./styles";

function CreateNoteForm({
  title = "",
  content = "",
  uuid = "",
  closeModal,
  createNote,
  updateNote,
}) {
  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);
  const setNote = (e) => {
    e.preventDefault();
    closeModal();
    if (uuid !== "") {
      return updateNote(uuid, { title: _title, content: _content });
    } else {
      return createNote({ title: _title, content: _content });
    }
  };
  return (
    <ContainerStyled>
      <FormStyled>
        <InputContainer>
          <LabelStyled>Titulo</LabelStyled>
          <InputStyled
            type="text"
            autoComplete="off"
            value={_title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <LabelStyled>Contenido</LabelStyled>
          <TextAreaStyled
            value={_content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputContainer>
        <ButtonStyled onClick={setNote}>Creat Nota</ButtonStyled>
      </FormStyled>
    </ContainerStyled>
  );
}

export default CreateNoteForm;
