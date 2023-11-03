import React from "react";
import { Outlet, useNavigate , Link } from "react-router-dom";


function Greet() {
    
    return (
        <div>
            <h1>Hello Nandini</h1>
            <Heading />
        </div>
    )
} 

const Heading = () => {
    const navigate = useNavigate()
    return (
        <div>
        <h3>Welcome to my page!</h3>
        <Link to='/welcome'>Welcome</Link>
        <button style={{backgroundColor:'yellow',height:50,width:100}} onClick={() => {
            navigate('/welcome')
        }}> Click on me</button>
        <Outlet/>
        </div>
        
    )
}

export { Greet , Heading }
// const Greet = () => {
//     <h1>Hello Nandini</h1>
// }

// export default Greet