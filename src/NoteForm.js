import React from 'react'

import './NoteForm.css'

const NoteForm = ({currentNote, saveNote, removeCurrentNote}) => {
    const handleChange = (ev) => {
        const note = {...currentNote}
        note[ev.target.name] = ev.target.value
        saveNote(note)
    }
    
    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button" onClick={removeCurrentNote}>
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

