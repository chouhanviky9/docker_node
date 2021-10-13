const express = require('express');

const app = express(); 

app.get("/",(req,res)=>{
    res.send("Hello There , What you looking for!!!");
})
const port=process.env.PORT || 2000;
app.listen(port,()=>{
    console.log('Running and alive on port '+`${port}`);
})