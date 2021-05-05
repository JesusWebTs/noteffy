import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
//Component
import Modal from "../Modal";
import CreateNoteForm from "../CreateNoteForm";
//Hook
import useModal from "../../hooks/useModal";
//Styled Components
import {
  NoteCheckBoxStyled,
  NoteContainerStyled,
  NoteTitleStyled,
  NoteControlsStyled,
  ControlButtonStyled,
  CreatedAtStyled,
  TimeBarStyled,
} from "./styles";

import { calculateDays } from "../../helpers";

function Note({
  title,
  content,
  uuid,
  done,
  time,
  onDelete,
  limitTime,
  onUpdate,
}) {
  const { closeModal, openModal, showModal } = useModal();
  const maxDays = calculateDays({
    TEnd: limitTime,
    TInit: time,
  });

  const leftDays = calculateDays({
    TEnd: limitTime,
    TInit: Date.now(),
  });

  const timeLeft = (leftDays * 100) / maxDays;

  return (
    <>
      <NoteContainerStyled>
        <TimeBarStyled
          timeLeft={timeLeft > 0 ? timeLeft : 0}
          leftDays={leftDays > 0 ? leftDays : 0}
        />
        <NoteTitleStyled>{title}</NoteTitleStyled>
        <p>{content}</p>
        <NoteCheckBoxStyled>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => onUpdate(uuid, { done: e.target.checked })}
          ></input>
        </NoteCheckBoxStyled>
        <NoteControlsStyled>
          <ControlButtonStyled onClick={() => onDelete(uuid)}>
            <DeleteIcon></DeleteIcon>
          </ControlButtonStyled>
          <ControlButtonStyled onClick={() => openModal()}>
            <UpdateIcon></UpdateIcon>
          </ControlButtonStyled>
        </NoteControlsStyled>
        <CreatedAtStyled>
          Creada el: {new Date(time).toLocaleDateString()}
          <br></br>
          Terminar el: {new Date(limitTime).toLocaleDateString()}
        </CreatedAtStyled>
      </NoteContainerStyled>
      <Modal closeModal={closeModal} show={showModal}>
        <CreateNoteForm
          closeModal={closeModal}
          updateNote={onUpdate}
          content={content}
          uuid={uuid}
          title={title}
        ></CreateNoteForm>
      </Modal>
    </>
  );
}

export default Note;
