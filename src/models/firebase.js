import { db } from "../data/data.js";

import { doc, getDoc, collection, getDocs } from "firebase/firestore";

async function obtenerProducto() {
  const docRef = doc(db, "products", "fWIpORWLJJ25nGon62wH");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("id: ", docSnap.id)
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

obtenerProducto()


async function obtenerProductos() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

obtenerProductos()