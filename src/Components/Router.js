import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MyForm from "./Form";
import { Greet } from "./Greet";
import Welcome from "./Welcome";
import Example from './Example'
import  useState from  './usestate'


function MyRoute(){
    return(
        <BrowserRouter>
            <Routes>
               <Route index element={<Greet/>} />
               <Route path="/welcome" element={<Welcome/>}/>
               <Route path="/" element={<MyForm/>}/>
               <Route path="/example" element={<Example/>}/>

            </Routes>
        </BrowserRouter>
    );
}
export default MyRoute