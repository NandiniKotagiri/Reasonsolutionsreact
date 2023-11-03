import React, { Component } from 'react';  
// class App extends Component{  
//    render(){  
//      var myStyle = {  
//          fontSize: 40,  
//          fontFamily: 'Courier',  
//          color: 'Yellow'  
//       }  
//       return (  
//          <div>  
//             <h1 style = {myStyle}>www.javatpoint.com</h1>  
//          </div>  
//       );  
//    }   
// }  
// export default App;  

class App extends Component{  
    render(){  
       var i = 5;  
       return (  
          <div>  
             <h1>{i == 1 ? 'True!' : 'False!'}</h1>  
          </div>  
       );  
    }  
 }  
 export default App;  


