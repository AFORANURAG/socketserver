const express=require("express");
const app=express();
const http=require("http");
const cors=require("cors");
const {Server}=require("socket.io")


const server=http.createServer(app)
// app.get("/",(req,res)=>{
// res.send("welcome bro kese ho yar")

// })


const io=new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
console.log(socket.id)

socket.on("join_room",(data)=>{
socket.join(data)
console.log(`user with id ${socket.id} join room : ${data}`)
})
socket.on("send_message",(data)=>{

console.log(data)

socket.to(data.room).emit("receive_message",data)

})


})

// app.listen(7000,()=>{
//     console.log("listening on port 8080")
// })

server.listen(8000,()=>{
    console.log("Server Running on port 8000")
})