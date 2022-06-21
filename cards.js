
 import pic from '../images/prof.jpg'
function Cards(){
    return(
     <>
      <div className="prf">
        <div className="card">
        <img src={pic}/>
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
      <div className="card">
        <img src={pic}/>
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
      <div className="card">
        <img src={pic}/>
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
      <div className="card">
        <img src={pic}/>
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
      </div>
      </>
    )
}

export default Cards