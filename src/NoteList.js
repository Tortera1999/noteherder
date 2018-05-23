// import React from 'react'

// import './NoteList.css'

// class NoteList extends React.Component {
//     render(props) {
//         return (
//             <div className="NoteList">
//                 <h3>Notes</h3>
//                 <ul id="notes">
//                     {this.props.value.otherList.map(list =>
//                         <a className="active">
//                             <li onClick={() => (this.props.onClick(list))}>
//                                 <div className="note">
//                                     <div className="note-title">
//                                         {list.title}
//                                     </div>
//                                     <div className="note-body">
//                                         <p>{list.note}</p>
//                                     </div>
//                                 </div>
//                             </li>
//                         </a>)
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

// export default NoteList

import React from 'react'
import Note from './Note'

import './NoteList.css'

const NoteList = ({notes,setCurrentNote}) => {

    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {notes.map(note => (<Note key={note.id} note={note} setCurrentNote={setCurrentNote}/>)
                    )}
                </a>
            </ul>
        </div>
    )
}

export default NoteList