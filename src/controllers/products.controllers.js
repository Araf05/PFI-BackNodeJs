import * as productService from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProductsServices();
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({message : 'Internal Server Error'});
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        if(id) {
            const product = await productService.getProductByIdServices(id);
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


export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productService.addProductsServices(product)
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({message : 'Internal Server Error'});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if(id) {
            await productService.deleteProductServices(id);
            res.sendStatus(200);
        } else {
            res.status(400).json({message : 'Bad Request'});
        }
    } catch(error) {
        res.status(500).json({message : 'Internal Server Error'});
    }
}

export const editProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        if(id && product) {
            await productService.editProductServices(id, product);
            res.sendStatus(200);
        } else {
            res.status(400).json({message : 'Bad Request'});
        }
        
    } catch(error) {
        res.status(500).json({message : 'Internal Server Error'});
    }
}