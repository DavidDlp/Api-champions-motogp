const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes')
const pilotRoutes = require('./routes/pilot.routes')
const markRoutes = require('./routes/mark.routes')

// Initializations
require('dotenv').config();
const app = express();

// Setting
const PORT = 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/user', userRoutes);
app.use('/pilot', pilotRoutes);
app.use('/mark', markRoutes);

app.use('*', (req,res,next) =>{
    const error = new Error()
    error.status = 404
    error.message = 'Route not Found'
    return next(error)
});

//Error center
app.use((error, req, res, next)=>{
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
});

// Start the Server
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>
    app.listen(PORT, () =>{
        console.info('Server is running in http://localhost:' + PORT)
    })
    )
