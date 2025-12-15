// const products = [
//     { id: 1, name: 'Producto 1', price: 1000 },
//     { id: 2, name: 'Producto 2', price: 2000 }
// ];
import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto, actualizarProducto } from '../models/products.models.js'

export const getAllProductsServices = async () => {
    return (
        new Promise(async(res, rej) => {
            try {
                const productos = await obtenerProductos();
                console.log("Productos desde services: ", productos);
                res(productos);
            }catch(error) {
                rej(error);
            }
        })
    );
};

export const getProductByIdServices = async (id) => {
    return(
        new Promise( async(res, rej) => {
            try {
                const product = await obtenerProducto(id);
                console.log("producto desde services: ", product);
                res(product);
            } catch(error) {
                rej(error);
            }
        })
    );
};


export const addProductsServices = async (product) => {
    return(
        new Promise( async(res, rej) => {
            try {
                const newProduct = await agregarProducto(product);
                res(newProduct);
            } catch(error) {
                rej(error);
            }
        })
    );
}


export const deleteProductServices = async (id) => {
    return (
        new Promise( async(res, rej) => {
            try {
                await eliminarProducto(id);
                res();
            } catch(error) {
                rej(error);
            }
        })
    );
}


export const editProductServices = async (id, product) => {
    return (
        new Promise( async(res, rej) => {
            try {
                await actualizarProducto(id, product)
                res();
            } catch(error) {
                rej(error);
            }
        })
    );
}
