import React, { useState } from "react";

function MyForm(){
    const[name, setName] = useState("");
    const[displayedName, setDisplayedName] = useState("");
    const [age,setage] = useState({});
    const [displayedage , setDisplayedage] = useState("");
     
    const UpdateName = () =>{
        setDisplayedName(`Your Name is ${name}`);  
        setDisplayedage(`Age is ${age}`);
    };

    return(
        <form>
            <label>Enter Your Name : 
            <input type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            
            />
            </label>
            <label>Enter your age:
                 <input 
                      type="number" 
                      name="age" 
                      value={age} 
                      onChange={(e) => setage(e.target.value)}
                  />
           </label>
           <input type="submit" />
            <br/>
            <br/>
            <button 
            type="button" onClick={UpdateName}>
             Name
            </button>
            <p>{displayedName}  ,  {displayedage}</p>

          
        </form>
    )
}
export default MyForm