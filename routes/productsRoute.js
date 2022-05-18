const router = require("express").Router();
let Product = require("../modals/Products");

router.route("/add").post((req,res) =>{

    const name = req.body.name
    const price = req.body.price
    const description = req.body.description


    const newProduct = new Product({
        name,
        price,
        description
    })

    newProduct.save().then(() =>{
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })


})

router.route("/getAll").get((req,res)=>{
    Product.find().then((products)=>{
        res.json(products)
    }).catch((error)=>{
        console.log(error)
    })
})

router.route("/update/:id").put(async(req,res) =>{
    let userId = req.params.id;
    //console.log("Userge Id- ",req.body)
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const updateProduct = {
        name,
        price,
        description
    }

    await Product.findByIdAndUpdate(userId,updateProduct)
    .then(() => {
        res.status(200).send({status: "Product Updated"})
    }).catch((error)=>{
    res.status(500).send({status: "Error with update"})
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;
    await Product.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Product Deleted"})
    }).catch((error)=>{
        res.status(500).send({status: "Error with delete"})
    })
})

module.exports = router;