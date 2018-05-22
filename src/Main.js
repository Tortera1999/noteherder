import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Main = () => {
    return (
        <div className="Main">
            <SideBar/>
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Main