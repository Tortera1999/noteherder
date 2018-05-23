import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
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

    // updateTitleItem(ev) {
    //     const otherList = [...this.state.otherList]
    //     let title = this.state.title
    //     otherList.forEach(list => {
    //         if (list.active === true) {
    //             title = ev.target.value
    //             list.title = ev.target.value
    //         }
    //     })
    //     this.setState({
    //         otherList, title
    //     })
    //     console.log(otherList)
    // }

    // updateNoteItem(ev) {
    //     const otherList = [...this.state.otherList]
    //     let note = this.state.note
    //     otherList.forEach(list => {
    //         if (list.active === true) {
    //             note = ev.target.value
    //             list.note = ev.target.value
    //         }
    //     })
    //     this.setState({
    //         otherList, note
    //     })
    //     console.log(otherList)
    // }

    // handleClick(item, ev) {

    //     const otherList = [...this.state.otherList]
    //     let title = this.state.title
    //     let note = this.state.note

    //     otherList.forEach(list => {
    //         if (list === item) {
    //             list.active = true
    //             title = list.title
    //             note = list.note
    //         }
    //         else {
    //             list.active = false
    //         }
    //     })

    //     console.log(title)
    //     this.setState({
    //         otherList: otherList,
    //         title: title,
    //         note: note
    //     })

    // }

    render() {
        return (
            <div className="Main" style={style}>
                <SideBar />
                <NoteList notes={this.state.notes} />
                <NoteForm/>
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