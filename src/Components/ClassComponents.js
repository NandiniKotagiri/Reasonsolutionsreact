import React from "react";
import { Component } from "react";

class App extends Component{
    render(){
        return(
           <div>
             <First/>
            <Second/>
           </div>
        )
    }
}
class First extends Component{
     render(){
        return(
            <div>
                <h1>JavaTpoint</h1>
            </div>
        )
     }
}
class Second extends Component{
    render(){
        return(
            <div>
                <h4>www.javatpoint.com</h4>
                <h6>This website contains the great CS tutorial!</h6>
            </div>
        )
    }
}
export default App