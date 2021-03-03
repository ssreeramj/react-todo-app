import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7c6WXTgVHmEHlOFVo6MJAoXjbVzs-ph8",
    authDomain: "react-todo-app-fdafd.firebaseapp.com",
    projectId: "react-todo-app-fdafd",
    storageBucket: "react-todo-app-fdafd.appspot.com",
    messagingSenderId: "13510740933",
    appId: "1:13510740933:web:da76e9ed5ea40292ca99ac"
      
});

const db = firebaseApp.firestore();

export default db;