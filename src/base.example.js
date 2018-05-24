import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'
// Initialize Firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DB URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUT MSID"
  };
  const app = firebase.initializeApp(config);
  const db = firebase.database(app)

  export const githubProvider = new firebase.auth.GithubAuthProvider();
  export const auth=app.auth()

  export default Rebase.createClass(db)