import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import './chatter.css';
let user ;
function Login() {
	function senduser(){
	user = document.getElementById('input1').value;
	}
	const [first, setfirst] = useState("")
  return (
	<div className='l11'>
		<div className="c-box">
      Welcome to the Chat Box 
     </div>
     <div className='logger'>
       <input type="mail" value={first} placeholder="Enter your name" className='login' id='input1' onChange={(e)=>{
		   setfirst(e.target.value);
	   }} />
      <Link onClick={(event)=>
		  !first ? event.preventDefault() : null 
	  } to="/chat"> <button  onClick={senduser} className='btn'> Submit </button> </Link>
     </div>
	</div>
  )
}

export default Login
export {user} 