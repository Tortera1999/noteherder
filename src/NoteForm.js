import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component{


  render(props){
    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                value={this.props.value}
                onChange={this.props.onTitleClick}
                placeholder="Title your note"
              />
            </p>
            <textarea name="body" value={this.props.value2} onChange={this.props.onNoteClick}/>
          </form>
        </div>
    );
  }
}
    

export default NoteForm