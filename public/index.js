import { initializeApp } from 'firebase/app';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { getAuth} from 'firebase/auth'; 
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAklEugOtB5QSk1JUOlX3WuO01JgeRo_DQ",
    authDomain: "nourish-me-e8cf8.firebaseapp.com",
    projectId: "nourish-me-e8cf8",
    storageBucket: "nourish-me-e8cf8.appspot.com",
    messagingSenderId: "305238771236",
    appId: "1:305238771236:web:e8077254e977618b977ab1",
    measurementId: "G-NCZ7FK98F5"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);