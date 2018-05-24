import React, { Component } from 'react';

import './App.css';
import {auth} from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount(){
    const uid = localStorage.getItem('uid')
    this.setState({uid})
    auth.onAuthStateChanged(user => {
      if(user){
        this.handleAuth(user)
      } else{
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    localStorage.setItem('uid', user.uid)
    this.setState({uid: user.uid})
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    localStorage.setItem('uid', null)
    this.setState({
      uid: null
    })
    auth.signOut()
  }
  render() {
    return (
      <div className="App">
      {
        this.signedIn() ? <Main signOut={this.signOut} uid={this.state.uid}/> : <SignIn handleAuth={this.handleAuth}/>
      }
      </div>
    );
  }
}


export default App;
