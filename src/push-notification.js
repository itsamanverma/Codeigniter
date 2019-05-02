import firebase from 'firebase';
import axios from 'axios';

export const initializeFirebase = () => {
    firebase.initializeApp({
             messagingSenderId: "1039538005070"
         })
}