/**
 * import { useState } from "react";

function App() {
  //useState hook

  const [languages, setLanguages] = useState(["Java", "React", "JavaScript"]);

  const [notes, setNotes] = useState([
    { id: 1, heading: "React", items: ["Components", "Props", "UseState"] },
    {
      id: 2,
      heading: "Data Structures",
      items: ["Stack", "Queue", "Linked list"],
    },
  ]);

  const add = () => {
    setLanguages((prev) => [...prev, "PHP"]);
  };

  const deleteLanguage = () => {
    setLanguages((prev) => prev.filter((language) => language !== "PHP"));
  };

  const addTask = () => {
    const newHeading = {
      id: Date.now(), heading: "Node.js", items: ["Express", "Middleware"]
    };

    setNotes(prev => [...prev, newHeading]);
  }
  const addItem = () => {
    setNotes(prev => (
      prev.map(note => (
        note.id === 1 ? {
          ...note,
          items: [...note.items, "UseEffect"]
        } : note
      ))
    ));
  };

  const deleteHeading = () => {
    setNotes(prev => prev.filter(note => note.id !== 3))
  }
  const editHeader = () => {
    setNotes(prev => (
      prev.map(note => (
        note.id === 1 ? {
          ...note, heading: "Component development"
        } : note
      ))
    ));
  }
  const editItem = () => {
    setNotes(prev => (
      prev.map(note => (
        note.id === 1 ? {
          ...note, items: [...note.items, "UseRef"]
        } : note
      ))
    ));
  }

  return (
    <>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <button onClick={add}>Add</button>
      <button onClick={deleteLanguage}>delete</button>

      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.heading}</h2>
          <ul>
            {note.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={addTask}>Add Task</button>
      <button onClick={addItem}>Add item</button>
      <button onClick={deleteHeading}>Delete heading</button>
      <button onClick={editHeader}>Change first header</button>
      <button onClick={editItem}>Adding item</button>
    </>
  );
}

export default App;

 */