const express=require('express');
const app=express();
app.use(express.static('public'))

app.listen(5500,()=>{
    console.log("Server is started");
});