import React from "react";

let doraemon ={
    title : "Doraemon"
}

let imgUrl = "https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbb8G7Xr4c4Qfy5HBR4rXK1eswvyJJ2DLo4cIXzmL5nQ0lEh_6nWWCEotsLuinh-cZSq2IziwIi6XBmyXh2uXqs6VGQGmqISQKg.jpg?r=bcb"

let Title = "Doraeman"

let descripsion = "Doraemon is the name of a robot cat that came from the future to help a boy named Nobita Nobi. Doraemon is about the life of Nobita Nobi. "

const App = () =>{
    return(
        <section className="movie-container">
           <Movie
           title={Title} 
           imgURL={imgUrl} 
           descripsion={descripsion}/>
           <Movie />
        </section>
    );
};
const Movie = (props) =>{
    console.log(props);
    return(
        <article>
            <img src={imgUrl} alt=""/>
            <h1>{props.Title}</h1>
            <p>{props.descrip}</p>
        </article> 
    )
}

export default App