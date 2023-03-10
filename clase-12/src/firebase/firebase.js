import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBo25R3sLI-Pcw_smIR2AyWnRXWM7Glw8",
  authDomain: "react-39530-2023.firebaseapp.com",
  projectId: "react-39530-2023",
  storageBucket: "react-39530-2023.appspot.com",
  messagingSenderId: "899093072049",
  appId: "1:899093072049:web:3aad17fcec274561be3a90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar la BDD
/*
    CRUD PRODUCTOS

    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}