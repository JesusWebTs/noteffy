import { useState } from "react";
import { useEffect } from "react";
import ApiConnect from "../services/apiFirebase";
import { v4 as uuidv4 } from "uuid";
const uid = localStorage.getItem("uid");

const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes(uid).then((_notes) => {
      setNotes(_notes);
    });
    return () => {};
  }, []);

  useEffect(() => {
    console.log(notes);
    return () => {};
  }, [notes]);

  const getNotes = (uid) => {
    setNotes(notes);
    return ApiConnect.getAll(uid)
      .then((notes) => notes)
      .catch((err) => {
        console.log(err);
      });
  };
  const getNote = (uuid) => {
    return ApiConnect.getOne(uuid);
  };
  const createNote = (note) => {
    const uuid = uuidv4();
    const time = Date.now();
    const newNote = { ...note, uuid, time, uid, done: false };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    return ApiConnect.post(newNote)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateNote = (uuid, note) => {
    const _note = notes.map((_note) =>
      _note.uuid === uuid ? { ..._note, ...note } : _note
    );
    setNotes(_note);
    return ApiConnect.update(uuid, note)
      .then(() => {
        return true;
      })
      .catch((err) => console.log(err));
  };
  const deleteNote = (uuid) => {
    let _notes = notes.map((note) => {
      if (note.uuid !== uuid) return note;
    });
    _notes = _notes.filter((note) => {
      if (note) return note;
    });
    setNotes(_notes);
    return ApiConnect.delete(uuid)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
    notes,
  };
};

export default useNotes;
