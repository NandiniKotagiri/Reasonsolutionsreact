import React from 'react';
import { ReactDOM } from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet'
import { Greet , Heading } from './Components/Greet';
import Welcome from './Components/Welcome'
import Car from './Components/Example'
import  FootBall  from './Components/Button';
import Onclick from './Components/Onclick'
import Form from './Components/Form';
import MasterFile from './MasterFile';


function App() {
  return (
    <div className="App">
      <MasterFile />
      {/* <Greet />
      <Welcome />
      <Heading />
      <Car brand={'Leo'}/>
      <FootBall/> */}
      {/* <Onclick/> */}
      {/* <Form /> */}
    </div> 
  ); 
}

export default App;
