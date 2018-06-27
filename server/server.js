var path=require('path');
var express=require('express');
var port= process.env.PORT || 3000;

var publicPath=path.join(__dirname,'/../public');
var app=express();

app.use(express.static(publicPath));



app.listen(port,()=>{
    console.log(`Server is up on ${port}`); 
});
//console.log(__dirname+'/../public ');
