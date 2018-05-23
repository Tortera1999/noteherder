import React from 'react'

import './NoteForm.css'

const NoteForm = ({currentNote}) => {
    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                value={currentNote.title}
                //onChange={this.props.onTitleClick}
                placeholder="Title your note"
              />
            </p>
            <textarea name="body" value={currentNote.body}/>
          </form>
        </div>
    );
}


export default NoteForm

