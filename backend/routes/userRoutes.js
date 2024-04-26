const express = require('express');
const { updateDetails, updatePassword, getDetails } = require('../controllers/userController');

const router = express.Router();

router.route('/:id').get(getDetails).patch(updateDetails);
router.route('/password/:id').patch(updatePassword);

module.exports = router;