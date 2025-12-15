import { db } from "../data/data.js";

import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

function obtenerProducto(id) {
  return (
    new Promise( async (res, rej) => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          res(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }catch(error) {
        console.log(error);
        rej(error);
      }
    })
  )
}

function obtenerProductos() {
  return (
    new Promise(async (res, rej) => {
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        productos.push({...doc.data(), id: doc.id});
    });
      console.log("Productos: ", productos);
      res(productos);
      } catch(error) {
        console.log(error);
        rej(error);
      }
    })
  )
}

obtenerProductos();

function agregarProducto(producto) {
  return (
    new Promise(async(res, rej) => {
      try {
          const docRef = await addDoc(collection(db, "products"), producto);
          console.log("Document written with ID: ", docRef.id);
          res({...producto, id: docRef.id})
        }catch(error) {
          console.log(error);
          rej(error)
        }  
    })
  )
}

//agregarProducto({nombre: "yerba", categoria: "infusion", precio: 100});

function actualizarProducto(producto) {
  return (
    new Promise(async(res, rej) => {
      try {
        await updateDoc(doc(db, "products", producto.id), { precio: producto.precio });
        console.log("Proucto actualizado: ", producto.id)
        res()
      } catch(error) {
        console.log(error);
        rej(error)
      }
    })
  )
}

//actualizarProducto({id:"P7QZ3V39cpkL2kwxdGIo", precio: 350})


function eliminarProducto(id) {
  return (
    new Promise(async(res, rej) => {
      try {
        await deleteDoc(doc(db, "products", id));
        console.log("producto eliminado")
        res();
      } catch(error) {
        console.log(error);
        rej(error);
      }
    })
  )
}

//eliminarProducto("fWIpORWLJJ25nGon62wH")