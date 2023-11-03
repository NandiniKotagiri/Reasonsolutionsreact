import React, { useState } from "react";

// function App(){
//     const[car,setCar] = useState({
//         brand : "Ford",
//         model : "Mustang",
//         year : "1964",
//         color: "red"

//     });
//     const UpdateCar = () => {
//         setCar({...car, color:"blue",brand:"Audi"});
//     }
//     return(
//         <div>
//             <h1>My {car.brand}</h1>
//             <p>It is a {car.color} {car.brand} {car.model} from {car.year}.</p>
//             <button onClick={UpdateCar}>Click Me</button>

//         </div>
//     )
// }

function App(){
    const[color,setcolor] = useState("red")

    return(
        <div>
          <h3>my favorite Color is {color}</h3>
          <button onClick={() => setcolor("Pink")}>Click me</button>
        </div>
    )
}

export default App