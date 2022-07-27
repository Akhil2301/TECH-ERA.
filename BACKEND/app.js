require('dotenv').config();
const express =require('express');
const app=express();
const cors =require('cors')
const connection=require('./config/db')
const userRoutes=require('./routes/user')
const {notFound,errorHandler}=require('./middleware/ErrorMidleware')
//db
connection()
//middleware
app.use(express.json());
app.use(cors());

app.use('/',userRoutes);
app.use(notFound)
app.use(errorHandler)

const port =process.env.PORT||5000;
app.listen(port,()=>console.log(`Listening on port${port}`))