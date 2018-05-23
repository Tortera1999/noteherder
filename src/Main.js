import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [
                {
                    id: 1,
                    title: 'Why I <3 JS',
                    body: 'Cause I like code and JS is code'
                },
                {
                    id: 2,
                    title: 'Thoughts on breakfast',
                    body: 'Its great'
                },
                {
                    id: 3,
                    title: 'Black mirror',
                    body: 'Dont'
                },
            ]
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: ''
        }
    }

    setCurrentNote = (note) =>{
        this.setState({currentNote: note})
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    render() {
        return (
            <div className="Main" style={style}>
                <SideBar resetCurrentNote={this.resetCurrentNote}/>
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote}/>
                <NoteForm currentNote={this.state.currentNote}/>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}
export default Main