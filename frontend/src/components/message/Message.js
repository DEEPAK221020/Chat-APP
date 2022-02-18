import React from 'react'
import message1 from './message.css'

function Message({user , msg , classes}) {
	if(user){
  return (
	
	<div className={`msg-box , ${classes}`}>
		{`${user} : ${msg}`}
    </div>
  )
}
else {
	return (
	
		<div className={`msg-box , ${classes}`}>
			{`you: ${msg}`}
		</div>
	  )
	}
}


export default Message