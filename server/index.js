const express=require('express')
const connection=require('./config/db')
const authRoute=require('./routes/authRoute')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()




const app=express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads'));



const port=5000


connection()
app.use(express.json())
app.use('/auth',authRoute)
app.listen(port,()=>console.log(`Server started on ${port}`))