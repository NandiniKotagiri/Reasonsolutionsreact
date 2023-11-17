import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import App from './App';
import './index.css';


// class Employee extends React.Component{
//     addEmployee=()=>{
//       alert("Adding a new Employee");
//     }  
  
//   render(){
//       return <div>
//               <h2>Welcome to Employee Component....</h2>
//               <p>
//                 <button onClick={this.addEmployee}>Add Employee</button>
//               </p>
//       </div>
//      }
//} 
// ReactDOM.render(element,document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(<App/>) 