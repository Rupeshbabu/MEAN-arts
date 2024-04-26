const express = require('express');
const { createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = express.Router();

router.route('/').get(getCategory).post(createCategory).patch(updateCategory).delete(deleteCategory);


module.exports = router;