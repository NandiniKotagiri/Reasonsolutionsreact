// import React, { useState } from "react";

// function FavoriteColor(){
//     const[color,setcolor] = useState("red");

//     return<h4>My favourate color is {color}!</h4>
// }
// export default FavoriteColor


import React from 'react';

function Car(props) {
    return (
<div>
<h2>I am { props.brand }!</h2>
</div>
    )
}
export default Car