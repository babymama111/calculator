const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('',(req,res)=>{
    const n1 = +(req.body.num1)
    const n2 = +(req.body.num2)
    const add = n1+n2
    res.send(`the value is  ${add}`)
})

app.listen(PORT,(res)=>{
    console.log("server started on PORT 3000")
})

