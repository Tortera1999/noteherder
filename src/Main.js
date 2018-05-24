import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: []
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

    saveNote = (note) => {
        const notes = [...this.state.notes]
        if(!note.id){
            note.id = Date.now()
            notes.push(note)
        } else{
        const i = notes.findIndex((currentNote) => currentNote.id === note.id)
        notes[i] = note
        }
        this.setState({notes})
        this.setCurrentNote(note)
    }

    deleteNote = (note) => {
        const notes = [...this.state.notes]
        const i = notes.findIndex((currentNote) => currentNote.id === note.id)
        if(i !== -1){
            notes.splice(i,1)
        }
        this.setState({notes})
        this.setCurrentNote(this.blankNote())
        //console.log(this.state.notes)
    }

    componentWillMount(){
        localStorage.getItem('notes') && this.setState({
            notes: JSON.parse(localStorage.getItem('notes'))
        })
        localStorage.getItem('currentNote') && this.setState({
            currentNote: JSON.parse(localStorage.getItem('currentNote'))
        })
    }

    componentDidMount(){
        if(localStorage.getItem('notes')){
            console.log('Using user storage')
        }
        if(localStorage.getItem('currentNote')){
            console.log('Using user storage')
        }
    }
    componentWillUpdate(nextProps,nextState){
        console.log(nextState.notes)
        localStorage.setItem('notes', JSON.stringify(nextState.notes))
        localStorage.setItem('currentNote', JSON.stringify(nextState.currentNote))
    }

    // componentDidMount(){
    //     localStorage.clear()
    // }
    render() {
        return (
            <div className="Main" style={style}>
                <SideBar resetCurrentNote={this.resetCurrentNote}/>
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote}/>
                <NoteForm currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote}/>
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