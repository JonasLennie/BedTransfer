import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCSlIeJJIXAC-FkYiDK79DCHqccqSpcdG4",
    authDomain: "bedtransfer-e9489.firebaseapp.com",
    projectId: "bedtransfer-e9489",
    storageBucket: "bedtransfer-e9489.appspot.com",
    messagingSenderId: "358809080094",
    appId: "1:358809080094:web:abd925ad2a62439aa7b90f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
