import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKbb9Esuhqz0ZqapQAIeY-0mGl3XVq1X4",
    authDomain: "ticketing-apps-76952.firebaseapp.com",
    databaseURL: "https://ticketing-apps-76952-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ticketing-apps-76952",
    storageBucket: "ticketing-apps-76952.appspot.com",
    messagingSenderId: "179528030623",
    appId: "1:179528030623:web:c8d7691d787d08c8c385aa",
    measurementId: "G-ZSLMPB3QC4"
};
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const storeFile = firebase.storage()
export default firebase