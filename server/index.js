import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res)=>{
    res.send("Hi")
})

app.listen(5000, ()=>{
    console.log("server is listening")
})