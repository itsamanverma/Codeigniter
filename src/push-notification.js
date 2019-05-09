import firebase from 'firebase';
import axios from 'axios';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "871833141121"
         })
}