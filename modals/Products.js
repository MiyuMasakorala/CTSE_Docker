const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    stockAvailable : {
        type : String,
        required : true
    },
    brandName : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }

})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;

//http://gitlab.sliit.lk/2022-257/2022-257