import React, { useState, useEffect } from "react";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TextAreaStyled,
  LabelStyled,
  ButtonStyled,
  InputContainer,
  FieldError,
} from "./styles";
import { useValidateField } from "./hooks/useValidateField";
import { inputTimeFormatter } from "../../helpers";

function CreateNoteForm({
  title = "",
  content = "",
  uuid = "",
  limitTime = "",
  closeModal,
  createNote,
  updateNote,
}) {
  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);
  const [_limitTime, setLimitTime] = useState(limitTime);
  const [submit, setSubmit] = useState(false);

  const [errorTitle, validTitle] = useValidateField({
    field: "Título",
    regExp: /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    minSize: 5,
    maxSize: 30,
    example: "Título de ejemplo.",
    text: _title,
  });
  const [errorComment, validComment] = useValidateField({
    field: "Comentario",
    regExp: null,
    minSize: 10,
    maxSize: null,
    example: null,
    text: _content,
  });
  const [errorLimitTime, validLimitTime] = useValidateField({
    field: "Tiempo Limite",
    regExp: null,
    minSize: null,
    maxSize: null,
    example: null,
    text: _limitTime,
  });


  const setNote = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (errorComment || errorLimitTime || errorComment) return;
    closeModal();
    if (uuid !== "") {
      return updateNote(uuid, {
        title: _title,
        content: _content,
        limitTime: inputTimeFormatter(_limitTime),
      });
    } else {
      return createNote({
        title: _title,
        content: _content,
        limitTime: inputTimeFormatter(_limitTime),
      });
    }
  };
  return (
    <ContainerStyled>
      <FormStyled>
        <div style={{ display: "flex", gap: "5px" }}>
          <InputContainer>
            <LabelStyled>Titulo</LabelStyled>
            <InputStyled
              type="text"
              autoComplete="off"
              value={_title}
              onChange={(e) => {
                setTitle(e.target.value);
                validTitle();
              }}
            />
            {errorTitle && submit ? (
              <FieldError>{errorTitle}</FieldError>
            ) : null}
          </InputContainer>
          <InputContainer>
            <LabelStyled>Tiempo Limite</LabelStyled>
            <InputStyled
              date={true}
              type="date"
              autoComplete="off"
              value={_limitTime}
              onChange={(e) => {
                setLimitTime(e.target.value);
                validLimitTime();
              }}
            />
            {errorLimitTime && submit ? (
              <FieldError>{errorLimitTime}</FieldError>
            ) : null}
          </InputContainer>
        </div>
        <InputContainer>
          <LabelStyled>Contenido</LabelStyled>
          <TextAreaStyled
            value={_content}
            onChange={(e) => {
              setContent(e.target.value);
              validComment();
            }}
          />
          {errorComment && submit ? (
            <FieldError>{errorComment}</FieldError>
          ) : null}
        </InputContainer>
        <ButtonStyled onClick={setNote}>Crear Nota</ButtonStyled>
      </FormStyled>
    </ContainerStyled>
  );
}

export default CreateNoteForm;
