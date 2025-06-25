const express = require('express');
const cors = require('cors');
const chats = require('./data/data');
const app = express();
const env = require("dotenv");
const connectDB = require('./config/db');
env.config();
app.use(cors());

connectDB()

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
});

app.get("/api/chat",(req, res)=>{
    res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    const {id} = req.params;
    const singleChat = chats.find(item => item._id === id )
    return res.send(singleChat);
})

app.listen(process.env.PORT,()=>{
    console.log("server working on 8000")
})