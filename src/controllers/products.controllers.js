export const getAllProducts = async (req, res) => {
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.param.id;
    const product = products.find(product => product.id == id);
    if(product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message : 'Producto no encontrado'});
    }
};  