import React , {useEffect,useState} from 'react'

function Fetch() {
	const [first, setfirst] = useState([]);
	useEffect(() => {
	  fetch('http://127.0.0.1:5500/frontend/src/api/data.json').then((res)=>res.json()).then((data)=>{
console.log(data);
setfirst(data);
	  })
	});
	
  return (
	  <>
	<div className='container'>
		<div className='row d-flex align-items-center'>
			<div className='col'>
		<div className="card" style={{width:'18rem'}} >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
  </div>
  </div>
  <div className='col'>
	  {first}
  </div>
</div>
	</div>
	</>
  )
}

export default Fetch