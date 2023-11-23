import React from "react";

const App = () =>{
    //   function HandleClick(e,firstName){
    //      console.log('Hello World',e,firstName)
    //   }

    const shoot = () =>{
        alert("Great shot")
    }
     return(
        <main>
            <div>
                <button type="button"
                 onClick={  shoot
                    
                    //(e) => HandleClick(e,"Nandini")
                }
       >Click Me</button>
            </div>
        </main>
     )
}
export default App;