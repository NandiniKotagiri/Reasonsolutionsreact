import React from "react";
import data from './data'

console.log(data)
const App = () => {
    return(
        <main className="container">
          <ul className="comments-container">
             {
                data.map((eachcomment) => {
                    const {id,name,email,body} = eachcomment;
                   return(
                        <ListItem id={id} name={name} email={email} body={body}/>
                   )
                })
             }
          </ul>
        </main>
    );
};

const ListItem  = (props) =>{
     const {id,name,body,email} = props
   return(
    <li key={id} className="comments">
        <div className="comments-header">
            <h3 className="email">{email}</h3>
            <h5 className="title">{name}</h5>
        </div>
        <div className="message">{body}</div>
    </li>
   );
}

export default App