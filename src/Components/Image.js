import React from "react";
import Practice2 from './practice2'

const App = () => {
    return (
        <section className="movie-container">
             <Movie fisrtName="emma" lastName="Watson"/>
             <Movie/>
             <Movie/>
             <Movie/>
             <Movie/>
             <Movie/>
             <Movie/>
             <Movie/>
             <Practice2/>
        </section>
    ) ;
   
};

const Movie = (props) =>{
    console.log(props);
    return ( <article  className="each-movie">
        <h2>{props.fisrtName}</h2>
        <ImageComponent/>
        <Title/>
    </article>
    )
}

const ImageComponent = () =>{
 return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkL_Ns6zGNiEwT-aRnMR109YSYYSg9a7Dxg&usqp=CAU"
         alt="Netflix Image show"/>
         
}
const Title = () => {
   const style ={
         heading : {
             color : "red",
             fontSize : "20px",
         },
    Small : {
              color : "blue",
              fontSize : "10px",
    } ,    
   };

    return(
        <div>
        <h5 style={style.heading}>Blue Flower 
          <span style={style.Small}>Small Title</span>
          </h5>
       </div>  
    );
}

export default App