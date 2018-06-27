const path=require('path');
const http=require('http');
var express=require('express');
var socketIO=require('socket.io');

var port= process.env.PORT || 3000;

var publicPath=path.join(__dirname,'/../public');
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
 console.log('New User Connected');

 socket.on('disconnect',()=>{
console.log('Disconnected');
});
});


server.listen(port,()=>{
   console.log(`Server is up on ${port}`); 
});


//app.listen(port,()=>{
 //   console.log(`Server is up on ${port}`); 
//});Connetedt to the server
//console.log(__dirname+'/../public ');
