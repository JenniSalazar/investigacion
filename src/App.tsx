import React from 'react';
import './App.css';
import './Button.module.css'
import {Button} from './Button';
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className ="wrapper">
     <button type="button"><a href="https://developers.themoviedb.org/3/movies/get-upcoming">Upcoming Movies </a></button> <br/>
     <button type="button"><a href=" https://developers.themoviedb.org/3/tv/get-top-rated-tv">Top Rated TV Shows </a></button><br/>
     <button type="button"><a href=" https://developers.themoviedb.org/3/movies/get-popular-movies">Popular Movies </a></button><br/>
    </div>
  );
}

export default App;
