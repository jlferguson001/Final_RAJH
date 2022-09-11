const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: false
    },
    numReviews:{
        type: Number,
        required: false
    },
   }, {timestamps:true})

   module.exports = mongoose.model('Product', productSchema)