import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJngWACK1OLUb6HSi-HKz1FGr_YF2dwqc",
    authDomain: "todo-app-database-86f28.firebaseapp.com",
    databaseURL: "https://todo-app-database-86f28-default-rtdb.firebaseio.com",
    projectId: "todo-app-database-86f28",
    storageBucket: "todo-app-database-86f28.appspot.com",
    messagingSenderId: "1026993821819",
    appId: "1:1026993821819:web:ed548ba1b3093624902ade"
};

export const app = initializeApp(firebaseConfig); 