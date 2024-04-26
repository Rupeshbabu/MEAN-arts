const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const proudctRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');


const app = express();

// SET Security HTTP Headers
app.use(helmet());

//Limits requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    mesaage: 'Too many requests from this IP, Please try again in an hour!'
});
app.use('/api', limiter);


app.use(express.json({limit : '10kb'}));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xssClean());

// Prevent parameter pollution
app.use(hpp());

app.use(cors());



// app.use('/', (req, res) =>{
//     res.end('Hi');
// });

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', proudctRoutes);
app.use('/api/v1/review', reviewRoutes);



// 404 - page not found 
app.all('*', (req, res, next) =>{
    res.status(404).json({
        status:'fail',
        message:`Can't find ${req.originalUrl} on this server!`
    });

    // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
