const express = require('express');
const cors = require('cors');
const app = express();
const foodRouter = require('../backend/routes/foodItems');
const userRouter = require('../backend/routes/users');
const loginRouter = require('../backend/routes/login');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the GoFood server!');
});

app.use('/api/foods',foodRouter);
app.use('/api/register',userRouter);
app.use('/api/login',loginRouter);

// resource error handling
app.use((req,res,next) => {
    res.status(404).json({
        message: 'route not found'
    })
})

// server error handling
app.use((err,req,res,next) => {
    res.status(500).json({
        message: 'route not found'
    })
})


module.exports = app;