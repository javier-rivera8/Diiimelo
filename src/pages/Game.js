import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import style from "./style/Home.module.scss";

export default function Game() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const next = async () => {
    try {
      // Fetch all documents from the "Diiimelo" collection
      const querySnapshot = await getDocs(collection(db, "Diiimelo"));
      const mensajesArray = [];

      querySnapshot.forEach((docSnapshot) => {
        mensajesArray.push({ id: docSnapshot.id, mensaje: docSnapshot.data().mensaje });
      });

      // Select a random message
      if (mensajesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * mensajesArray.length);
        const selectedMessage = mensajesArray[randomIndex];

        // Display the message
        setMensaje(selectedMessage.mensaje);

        // Delete the message from the database
        await deleteDoc(doc(db, "Diiimelo", selectedMessage.id));
      } else {
        setMensaje("No hay mensajes disponibles.");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMensaje("Error al obtener el mensaje.");
    }
  };

  return (
    <div className={style.container}>
      <h1 onClick={() => navigate("/")}>diiimelo</h1>
      <p style={{ textTransform: "uppercase" }}>{mensaje}</p>
      <button onClick={next}>Next</button>
    </div>
  );
}
