// const products = [
//     { id: 1, name: 'Producto 1', price: 1000 },
//     { id: 2, name: 'Producto 2', price: 2000 }
// ];
import { obtenerProductos } from '../models/products.models.js'

export const getAllProductsServices = () => {
    const products = obtenerProductos();
    console.log("Productos desde services: ", products)
    return products;
};

export const getProductByIdServices = async(id) => {
    const products = obtenerProductos();
    return products.find(product => product.id == id);
}
