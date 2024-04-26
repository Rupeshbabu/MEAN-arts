const jwt = require('jsonwebtoken');

const { successResponse } = require("../utils/globalSuccessResponse");
const User = require("../models/userModel");
const AppError = require('../utils/appError');



const signToken = (user) =>
  jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) =>{
  const token = signToken(user);

  //Send token in cookies
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  // if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  //Remove password from output
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  })
}

exports.signIn = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if(!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please enter email or password!!!'
      });
    }
    const user = await User.findOne({email}).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }
    createSendToken(user, 200, res);
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};

exports.signUp = async (req, res, next) => {
  try {
    await User.create(req.body);    
    return res.send(successResponse(201, "success"));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};


exports.protect = async (req, res, next) => {

  try {
    // 1. Getting token and check of it's there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  console.log(token);

  if (!token) {
    return next(new AppError('Your are not logged in! Please log and get access', 401));
  }

  // 2. Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3. Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The User belonging to this token does no longer exist', 401));
  }

  // 4. Check if user changed password after the token was issued
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(new AppError('User recently changed password! Please login again', 401));
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;

  next();
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
  
};

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    //roles ['admin', 'lead-guide]. role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };