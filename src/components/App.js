import React, { useState } from "react";
import CreateArea from "./CreayeArea";
import Note from "./Note"


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
          <Note
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
