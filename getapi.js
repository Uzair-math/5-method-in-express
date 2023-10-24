const express = require('express')
const dbconnect = require('./mongodb')
const app = express()
app.use(express.json())

app.get('/get',async (req,resp)=>{
    let data = await dbconnect();
    data = await data.find().toArray()
    resp.send(data)
})

app.post('/post1',async (req,res)=>{
    let data = await dbconnect()
    let result = await data.insert(req.body)
    res.send(result)
})

app.put('/post2',async (req,res)=>{
    let data = await dbconnect()
    let result = data.updateOne(
        {name:"Iphone 13"},{$set:req.body}
    )
    res.send({result:"update"})
})
app.listen(3000,()=>{
    console.log("connect");
})