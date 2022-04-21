const express = require("express");
const app= express();
const port= 2000;

app.get('/',(req,res)=>{
    res.send("Welcome to Node js")
})
app.listen(port,()=>{
    console.log(`Server listening at ${port}`)
})
