import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Main = () => {
    return (
        <div className="Main" style={style}>
            <SideBar/>
            <NoteList />
            <NoteForm />
        </div>
    )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
  }
export default Main