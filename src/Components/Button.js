import React from "react";

function FootBall(){
    const Shoot = () =>{
        alert("Great Shot!");
    }
    return (
        <button  onClick={Shoot}>Button</button>
    );
}
export default FootBall