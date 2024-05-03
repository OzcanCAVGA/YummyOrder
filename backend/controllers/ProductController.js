const ProductSchema = require('../models/productSchema');

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
                //  details,
                price,

            })
            createResponse(res, 201, product)
        }

    } catch (error) {
        createResponse(res, 400, error);
    }
}

const productUpdate = async (req, res) => {
    const productid = req.params.productid

    // otorite yapacaksin ileride {
    const name = req.body.name
    const description = req.body.description
    const category = req.body.category
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

module.exports = {
    addProduct,
    productUpdate,

}