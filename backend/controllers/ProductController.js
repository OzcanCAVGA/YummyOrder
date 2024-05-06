const ProductSchema = require('../models/ProductSchema');

const createResponse = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const addProduct = async (req, res) => {


    const name = req.body.name
    const description = req.body.description
    const category = req.body.category
    const price = req.body.price
    const images = req.body.images




    if (!name || !description || !category || !price) {
        createResponse(res, 400, { "hata": "Tüm alanlar doldurun." })
        return;
    }

    try {
        const handleProduct = await ProductSchema.findOne({ name: name })

        if (handleProduct) {
            createResponse(res, 400, { "hata": "Bu isimde bir ürün mevcut" })
        }
        else {
            const product = await ProductSchema.create({
                name,
                description,
                category,
                images,
                price,

            })
            createResponse(res, 201, product)
        }

    } catch (error) {
        createResponse(res, 400, error);
    }
}

const updateProduct = async (req, res) => {
    const productid = req.params.productid

    // otorite yapacaksin ileride {
    const name = req.body.name
    const description = req.body.description
    const category = req.body.category
    const images = req.body.images
    const price = req.body.price

    if (!name || !description || !category || !price) {
        createResponse(res, 400, { "hata": "Tüm alanlar doldurun." })
        return;
    }
    else {
        try {
            const product = await ProductSchema.findById(productid);
            product.name = name;
            product.description = description;
            product.category = category;
            product.images = req.body.images
            product.price = price;

            try {
                await product.save()
                createResponse(res, 200, product)
            } catch (error) {
                createResponse(res, 400, error);
            }

        } catch (error) {
            createResponse(res, 400, error)
        }
    }

    // }
}

const deleteProduct = async (req, res) => {

    const productid = req.params.productid

    try {
        const product = await ProductSchema.deleteOne({ _id: productid })

        if (product.deletedCount === 0) {
            createResponse(res, 404, { "hata": "ürün bulunamadı." })
        } else {
            createResponse(res, 200, { "mesaj": "Ürün başarıyla silindi." });

        }
    } catch (error) {
        createResponse(res, 400, error);

    }

}

const searchProducts = async (req, res) => {
    const product = req.body.product

    try {
        const products = await ProductSchema.find({
            name: { $regex: product, $options: 'i' }
        })
        if (products.length === 0) {
            createResponse(res, 404, { "hata": "Urun bulunamadı" })
        } else {
            createResponse(res, 200, products)
        }
    } catch (error) {
        createResponse(res, 400, error)
    }


}

const getProductById = async (req, res) => {
    const productid = req.params.productid;
    try {
        const product = await ProductSchema.findById(productid)
        if (!product) {
            createResponse(res, 404, { "hata": "Ürün bulunamadı" })
        } else {
            createResponse(res, 200, product)
        }
    } catch (error) {
        createResponse(res, 400, error);

    }
}

const getProducts = async(req, res) =>{
    try {
        const products = await ProductSchema.find();
        createResponse(res, 200, products)
    } catch (error) {
        createResponse(res, 400, error)
    }
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductById,
}