import express from "express";
import cors  from "cors";
import dataRouter from  "./router/dataRouter.js";
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const port = process.env.port

app.use(cors())
app.use(dataRouter)

app.get('/', (req, res)=>{
    res.send('hellow');
});

app.listen(port, ()=>{
    console.log(`Server is running in port http://localhost:${port}`)
})

