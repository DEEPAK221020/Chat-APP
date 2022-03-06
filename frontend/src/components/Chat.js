import React, { useEffect, useState } from 'react'
import socketIO from 'socket.io-client';
import '../App.css';
import './chat.css';
import send from './sender.png'
import {user} from './Login'
import Message from './message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import closer from './closer.png';
const Endpoint = "http://localhost:5500/";

let socket ;
 
function Chat() {
	const [message , setmessage] = useState([]);
	const [id, setid] = useState("");
	  const sender= ()=>{
		  let message = document.getElementById('stt1').value 
socket.emit('message' , {message , id})
document.getElementById('stt1').value = "";
	 }
	useEffect(() => {
		 socket = socketIO(Endpoint , {transports:['websocket']}); 
		socket.on('connect', ()=>{
			alert('connected');
			setid(socket.id);
		});
		
		socket.emit('joined', {user});
		socket.on('welcome' , (data)=>{
			setmessage([...message,data]);
			console.log(data.user , data.message);
	});
// 	socket.on('welcome', (data)=>{
// 		setmessage([...message,data]);
// console.log(data.user , data.message);
// 	});
	socket.on('user-joined' , (data)=>{
		setmessage([...message,data]);
		console.log(data.user , data.message);
	})
	socket.on('leave', (data)=>{
		setmessage([...message,data]);
console.log(data.user , data.message );
	})
		return () => {
			socket.emit("disconnect");
			socket.off();
	  }
	}, [])

	useEffect(()=>{
		socket.on('sendMessage' , (data)=>{
			setmessage([...message,data]);
			console.log(data.user , data.message , data.id);
		})
		return()=>{
			socket.off();
		}
	},[message]);
	
  return (
	<div className='ch-pt-1'>
    	<div className='chatbox'> 
		<div className='header'> 
		<h1>Chatt App</h1>
		<a href='/'><img src={closer} alt="Cancel"/></a>
		</div> 
		<ReactScrollToBottom className='chat-part'>
			{/* <Message msg={message}/>
			<Message msg="hello world"/>
			<Message msg="hello world"/> */}
			{message.map((item,i)=>
                 <Message user={item.id==id ? "" : item.user} msg={item.message} classes={item.id==id ?'righter': 'lefter'} />
			)}
        </ReactScrollToBottom>
		<div className='inputs'>
		<input type="text" className='input-1' id='stt1' />
		<button onClick={sender} className='btn-2'><img src={send}/></button>
		</div>
		</div>
		</div>

  )
}

export default Chat