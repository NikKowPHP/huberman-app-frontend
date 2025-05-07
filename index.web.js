import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_j9o33tlMEEyUNx78UqZGAmOklihLkCg",
  authDomain: "huberman-95d6d.firebaseapp.com",
  projectId: "huberman-95d6d",
  storageBucket: "huberman-95d6d.firebasestorage.app",
  messagingSenderId: "544986799642",
  appId: "1:544986799642:web:6ac6d3985c8a1249b8fba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
