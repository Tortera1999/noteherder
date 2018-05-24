import React from 'react'

import './NoteForm.css'

const NoteForm = ({currentNote, saveNote, deleteNote}) => {
    const handleChange = (ev) => {
        const note = {...currentNote}
        note[ev.target.name] = ev.target.value
        saveNote(note)
    }

    const handleDelete = (ev) => {
      deleteNote(currentNote)
    }

    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button" onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                value={currentNote.title}
                onChange={handleChange}
                placeholder="Title your note"
              />
            </p>
            <textarea name="body" value={currentNote.body} onChange={handleChange}/>
          </form>
        </div>
    );
}


export default NoteForm

