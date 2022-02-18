// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import socketIO from "socket.io-client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Chat from './components/Chat';
import Fetch from './api/Fetch';
// const Endpoint = "http://localhost:5500/";
// const socket = socketIO(Endpoint , {transports:['websocket']}) 
function App() {
//   socket.on('connect', ()=>{
// console.log('connected');
//   });
  return (
      <Router>
     <Routes>
       <Route exact path='/' element={<Login/>}></Route>
       <Route exact path='/chat' element={<Chat/>}></Route>
       <Route exact path='/API' element={<Fetch/>}></Route>
     </Routes>
     </Router>
  );
}

export default App;
