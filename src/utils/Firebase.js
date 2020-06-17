import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCzpTQtlpS4ZoJGy3GUuipUYPQW4dJxMCw",
    authDomain: "desktopmuiscapp.firebaseapp.com",
    databaseURL: "https://desktopmuiscapp.firebaseio.com",
    projectId: "desktopmuiscapp",
    storageBucket: "desktopmuiscapp.appspot.com",
    messagingSenderId: "735883205949",
    appId: "1:735883205949:web:1d82a1abccdfbcbdacb954"
};

export default  firebase.initializeApp(firebaseConfig);
