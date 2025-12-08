import {getAllProductsServices, getProductByIdServices} from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    const products = await getAllProductsServices();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await getProductByIdServices(id);
    if(product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message : 'Producto no encontrado'});
    }
};  