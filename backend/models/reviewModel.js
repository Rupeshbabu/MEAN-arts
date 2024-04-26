const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    reviewMessage: String,
    isActive: {
        type: Boolean,
        default: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Review', reviewSchema);