import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJLm5V83uQ-z4LCHmey-IlnydRhFDzRJw",
    authDomain: "fundoo-237806.firebaseapp.com",
    databaseURL: "https://fundoo-237806.firebaseio.com",
    projectId: "fundoo-237806",
    storageBucket: "fundoo-237806.appspot.com",
    messagingSenderId: "871833141121",
    appId: "1:871833141121:web:a8e9e2771f9aabbc"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };