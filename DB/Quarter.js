const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        quarterrevenue:String,
        netincome:String,
        profit:String,
        profitincome:String,
    }
);

const productModel = mongoose.model("quarters",productSchema);  //quarters is collection name of database sbi

module.exports = productModel;