const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors') ;
const app = express();
app.use(cors());


//connect to database
connectDB();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())

/* 
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE')

        return res.status(200).json({})
    }

    next();

}) */

app.use('/urlshortner', require('./routes/index'));
app.use('/urlshortner/api', require('./routes/findAll'));
app.use('/urlshortner/api/url', require('./routes/url'));

app.get('/', (req,res) => {
   res.send('Welcome to  Url Shrinker by Myilvaganan!')
})
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))