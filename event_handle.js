import '../navs.css'
import pic  from '../images/railway-station.png'

function BtnEvent(){
    function show(){
        console.log("button is clicked")
    }
    function show2(){
        const na=document.getElementById("no").value;
        console.log(na)

    }
 function display(){
    
    const name=document.getElementById("nm").value;
    alert(name);
 }
 function imgfun(){
   
    const imgid=document.getElementById("img1");
    imgid.style.width="400px";
    imgid.style.height="400px";
    imgid.style.backgroundColor="red";

 }
    return(
        <>
        <button onClick={show}>
            click Me!
        </button>

        <input  type="text" onBlur={display} id="nm"/>
        <input  type="text" onKeyUp={show2} id="no"/>
        <br/> 
        <div id="img1"  className="imgs">
            <img src={pic} className="imgs" onMouseOver={imgfun}/>
        </div>
        /*
          onkeyUp, onkeyDown,onClick,onBlur,onSubmit 
          onmouseover,onmouserout

        */
        </>
    );
}

export default BtnEvent


