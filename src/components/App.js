import React, { useState } from "react";
import CreateArea from "./createNote";
import DeleteNote from "./deleteNote"

const App = (props) => {
   const [notes, setNotes] = useState([]);
  function handleNoteAdd(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function handleNoteDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((elem, index) => {
        return index !== id;
      });
    });
  }
  return (<>
    <header>
   <h2>Note App</h2>
    </header>
    <div>
      <CreateArea onAdd={handleNoteAdd} />
      {notes.map((note, index) => {
        return (
          <DeleteNote
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleNoteDelete}
          />
        );
      })}
    </div>
    </>
  );
};
export default App;
