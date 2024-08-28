import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import style from "./style/Home.module.scss";

export default function Home() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate(); // Hook to navigate

  const enviarMensaje = async () => {
    if (mensaje.trim() === "") return;

    try {
      await addDoc(collection(db, "Diiimelo"), { mensaje: mensaje });
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const borrarMensajes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Diiimelo"));
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(doc(db, "Diiimelo", docSnapshot.id));
      });
      console.log("Todos los mensajes fueron eliminados");
    } catch (error) {
      console.error("Error al borrar los mensajes:", error);
    }
  };

  return (
    <div className={style.container}>
      <h1 onClick={() => navigate("/game")}>diiimelo</h1>
      <input
        placeholder="Entra tu secretito"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button onClick={enviarMensaje}>Send</button>
      <button onClick={borrarMensajes}>Clear</button>
    </div>
  );
}
