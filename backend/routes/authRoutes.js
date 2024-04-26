const express = require('express');
const { signUp, signIn, forgotPassword, resetPassword } = require('../controllers/authController');


const router = express.Router();

router.route('/signin').post(signIn);
router.route('/').post(signUp);
router.route('/:id').post(forgotPassword).patch(resetPassword);



module.exports = router;