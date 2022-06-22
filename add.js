
import { Component } from "react";



function Add(){
    function sum(){
        const n1=document.getElementById("n1").value; 
        const n2=document.getElementById("n2").value; 
        var a=parseInt(n1);
        var b=parseInt(n2);
        const c=a+b;
    
        alert(c)
    }
    return(
        <>
          <input type="text" id="n1"/>
          <input type="text" id="n2"/>
          <button type="button" onClick={sum}>Sum</button>

         
        </>
    );

}

export default Add;