import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
//Component
import Modal from "../Modal";
import CreateNoteForm from "../CreateNoteForm";
//Hook
import useModal from "../../hooks/useModal";

import {
  NoteCheckBoxStyled,
  NoteContainerStyled,
  NoteTitleStyled,
  NoteControlsStyled,
  ControlButtonStyled,
  CreatedAtStyled,
} from "./styles";

function Note({ title, content, uuid, done, time, onDelete, limitTime,onUpdate }) {
  const { closeModal, openModal, showModal } = useModal();

  return (
    <>
      <NoteContainerStyled>
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
