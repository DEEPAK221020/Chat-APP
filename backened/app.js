const http =require('http')
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const IO = socketIO(server);
var users=[];
app.get('/' , (req ,res)=>{
	res.send('hello world');
});
app.use(cors());
IO.on('connection' , (socket)=>{
	console.log('new connection');
	socket.on('joined' , ({user})=>{
		users[socket.id]=user
		// var user = this.data.user;
		console.log(`${users[socket.id]} hs joinnneddd`);
console.log(`${user} has joined the chat `);
socket.broadcast.emit('user-joined' , {user:'Admin' , message:`${users[socket.id]} has joined`});
	});

	socket.emit("welcome" , {user:'Admin' , message:`welcome to the chat , ${users[socket.id]}` });
	socket.on('message' , ({message , id})=>{
IO.emit('sendMessage' , {user:users[id] , message , id});
	});

	socket.on('disconnect' , ()=>{
		socket.broadcast.emit('leave', {user:'Admin' , message:`user has left`} )
		console.log("user left");
	});
});
// app.post("/post", (req, res) => {
// 	console.log("Connected to React");
// 	res.redirect("/");
//   });
server.listen(5500 , (e)=>{
	console.log('Done');
});