const router = require("express").Router();
let Product = require("../modals/Products");

router.route("/add").post((req,res) =>{

    const name = res.body.name;
    const price = Number(res.body.price);
    const description = res.body.description;
    const stockAvailable = res.body.stockAvailable;
    const brandName = res.body.brandName;
    const category = res.body.category;

    const newProduct = new Product({
        name,
        price,
        description,
        stockAvailable,
        brandName,
        category
    })

    newProduct.save().then(() =>{
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;