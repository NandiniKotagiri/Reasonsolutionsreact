import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import MyForm from "./Form";
import Welcome from "./Welcome";
import  MyApplication  from './usestate';
function Main(){
    return(
        <BrowserRouter>
           <Routes>
               <Route index element={<Layout/>}/>
                <Route path="/myapplication" element={<MyApplication/>}/>
                <Route path="/form" element={<MyForm/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
           </Routes>
        </BrowserRouter>
    )
};
export default Main