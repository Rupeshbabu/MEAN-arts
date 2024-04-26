const express = require('express');
const { createProduct, deleteProduct, getProduct, updateProduct } = require('../controllers/productController');

const router = express.Router();

router.route('/').get(getProduct).post(createProduct).patch(updateProduct).delete(deleteProduct);


module.exports = router;