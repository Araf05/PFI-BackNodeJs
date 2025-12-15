import {getAllProductsServices, getProductByIdServices} from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsServices();
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({message : 'Internal Server Error'});
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        if(id) {
            const product = await getProductByIdServices(id);
            console.log("producto desde controller: ", product)
            if(product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({message : 'Not Found'});
            }
        } else {
            res.status(400).json({message : 'Bad Request'});
        }
    } catch(error) {
        console.log("id en Controllers: ", id)
        res.status(500).json({message : 'Internal Server Error'});
    }
};  
