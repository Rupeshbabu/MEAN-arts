const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product Title is required'],
        minlength: [20, 'Product title enter minimum length is 20'],
        maxlength: [120, 'Product title enter maximum length is 120']
    },
    subTitle: {
        type: String,
        required: [true, 'Product sub title is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref:'Category'
    },
    images: {
        type:String,
        default: 'https://www.pngall.com/wp-content/uploads/15/Heart-Crown-PNG-Image-HD.png'
    },
    price: {
        type: Number,
        required:[true, 'Product price is required']
    },
    salePrice: {
        type: Number,
        required: [true, 'Priduct sale price is required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    slug: String
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);