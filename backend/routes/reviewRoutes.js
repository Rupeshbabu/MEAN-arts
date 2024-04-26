const express = require('express');
const { createReview, deleteReview, getAllReview, getReview } = require('../controllers/reviewController');

const router = express.Router();

router.route('/').get(getAllReview).delete(deleteReview);
router.route('/:id').get(getReview).post(createReview);

module.exports = router;