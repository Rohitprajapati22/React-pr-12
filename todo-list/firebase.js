import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeqoo2599V3OEZ4_peL6C_s0mokUQoYUE",
  authDomain: "todo-app-firebase-2f555.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-2f555-default-rtdb.firebaseio.com",
  projectId: "todo-app-firebase-2f555",
  storageBucket: "todo-app-firebase-2f555.appspot.com",
  messagingSenderId: "863837039837",
  appId: "1:863837039837:web:b38836ad01226f73b93f34"
};

export const app = initializeApp(firebaseConfig);