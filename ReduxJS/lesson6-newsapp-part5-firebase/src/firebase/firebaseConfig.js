import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyAS8ejsU1cVum3DCrn_uxK-2PCM1NlgGPY",
    authDomain: "code-warriors-6a8f3.firebaseapp.com",
    databaseURL: "https://code-warriors-6a8f3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "code-warriors-6a8f3",
    storageBucket: "code-warriors-6a8f3.appspot.com",
    messagingSenderId: "31204283222",
    appId: "1:31204283222:web:b81e8aedf638984900fcf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}