import React from 'react'

const Note = ({note,setCurrentNote}) => {
    return(
        <li>
              <div className="note" onClick={() => setCurrentNote(note)}>
                <div className="note-title">
                  {note.title}
                  </div>
                <div className="note-body">
                  <p>
                      {note.body}
                  </p>
                </div>
              </div>
        </li>
    )
}

export default Note