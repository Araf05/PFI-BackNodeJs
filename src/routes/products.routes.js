import express from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct, editProduct } from '../controllers/products.controllers.js'

const routes = express.Router();

routes.get('/products', getAllProducts);

routes.get('/products/:id', getProductById);

routes.post('/products/create', addProduct);

routes.delete('/products/:id', deleteProduct);

routes.put('/products/:id', editProduct);

export default routes;