import React from "react";
//Components
import Note from "../../component/Note";
import Modal from "../../component/Modal";
import CreateNoteForm from "../../component/CreateNoteForm";

//Hooks
import useNotes from "../../hooks/useNotes";
import useModal from "../../hooks/useModal";

import { NotesContainerStyled, CreateNoteButton } from "./styles";
import AddIcon from "@material-ui/icons/Add";
const note = {
  title: "Hola como estas",
  content: "XD",
};

function NotesPage() {
  const { deleteNote, updateNote, notes, createNote } = useNotes();
  const { closeModal, openModal, showModal } = useModal();
  return (
    <React.Fragment>    
      <NotesContainerStyled>
        {notes.map(({ uuid, title, content, time, limitTime, done }) => (
          <Note
            key={uuid}
            uuid={uuid}
            title={title}
            content={content}
            time={time}
            done={done}
            limitTime={limitTime}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
        <CreateNoteButton onClick={() => openModal()}>
          <AddIcon />
        </CreateNoteButton>
        <Modal closeModal={closeModal} show={showModal}>
          <CreateNoteForm
            closeModal={closeModal}
            createNote={createNote}
            updateNote={updateNote}
          ></CreateNoteForm>
        </Modal>
      </NotesContainerStyled>
    </React.Fragment>
  );
}

export default NotesPage;
