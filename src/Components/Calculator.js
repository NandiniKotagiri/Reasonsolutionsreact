import React from "react";
import Keypad from "./keypad";
import { useState } from "react";

function Calci () {

    let [input,setinput]= useState("");
    function  handleClick(value){
  
        setinput(input+value)
    }
    function  handlecalculate(value){
  
        let outputval = eval(input) 
        setinput(outputval)
    }
    function  handleClear(){
  
        setinput("")
    }

    return(
        <div className="containercalci">
            <h4>Calculator App using React js</h4>
              <br/>
               <div className="calculator">
                 <input type="text" value={input} className="output"/>
                 <Keypad handleClick= {handleClick} handlecalculate={handlecalculate} handleClear={handleClear}/>
               </div>
        </div>

    )
}

export default Calci