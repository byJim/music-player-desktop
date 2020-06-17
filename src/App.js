import React, { useState } from "react";
import firebase from "./utils/Firebase";
import "firebase/auth";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  //Verificacion si el usuario esta logueado o no.
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      setUser(null);
    } else {
      setUser(currentUser);
    }

    setisLoading(false);
  });

  if (isLoading) {
    return null;
  }

  return !user ? <Auth /> : <UserLogged />;
}

function UserLogged() {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((r) => {
        console.log("Error al cerrar secion.");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1> Usuario Logueado</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
}

export default App;
