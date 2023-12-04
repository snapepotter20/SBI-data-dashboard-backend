const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        quarterrevenue:String,
        netincome:String,
        profit:String,
        profitincome:String,
    }
);

const productModel = mongoose.model("quarters",productSchema);

module.exports = productModel;