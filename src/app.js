require('dotenv').config();
const express=require("express");
const apiroutes= require('./routes/api.js');

const app=express();
app.use(express.json());

app.use('/api',apiroutes);
const PORT=process.env.PORT|| 3000;

app.listen(PORT,()=>{});