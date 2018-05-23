import React from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const SideBar = () => {
    return (
        <nav className="Sidebar">
          <div className="logo">
            <img src={quill}alt="Noteherder" />
          </div>
          <a className="new-note" href="/notes">
            <img src={newHover} alt="New note" />
            <img className="outline" src={newIcon} alt="New note" />
          </a>
          <div className="SignOut">
            <button>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>
    )
}

export default SideBar