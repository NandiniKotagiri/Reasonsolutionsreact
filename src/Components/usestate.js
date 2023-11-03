import React, { useState } from "react";

function MyApplication(){
    const[name , setName] = useState("");
    const[displayedName ,setDisplayedName] = useState("");
    const[age, setage] = useState("");
    const[displayedage,setDisplayedage] = useState("");
    const[place, setplace] = useState("");
    const[displayedplace,setDisplayedplace] = useState("");

      const UpdateClick = () =>{
          setDisplayedName(`Your Name is ${name} ,`);
          setDisplayedage(`Age is ${age} ,`);
          setDisplayedplace(`Place  ${place} .` );
      }

    return(
        <form>
        <label>Enter Your Name : 
            <input type="text" style={{marginLeft : "10px"}}
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <br/>
        <label style={{marginTop: "1%"}}>
            Enter Your Age: 
            <input type="number" style={{marginTop: "1%",marginLeft: "25px"}}
            name="age"
            value={age}
            onChange={(e) => setage(e.target.value)}/>
        </label>
        <br/>
        <label style={{marginTop: "1%"}}>
            Enter Your Place: 
            <input type="text" style={{marginTop: "1%",marginLeft: "15px"}}
            value={place}
            onChange={(e) => setplace(e.target.value)}/>
        </label><br/>
        <button type="button" onClick={UpdateClick} style={{marginTop: "10px"}}>Submit</button>
        <p style={{color:"green"}}>{displayedName}    {displayedage}  {displayedplace}</p>
    </form>
    )
}

export default MyApplication