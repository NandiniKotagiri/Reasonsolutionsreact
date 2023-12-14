import React, { useState } from "react";
import { TextField, Grid } from '@mui/material';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';


function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Changed the initial value to false

    const handleClick = (e) => {
        e.preventDefault();

        if (username === 'tegra' && password === 'reason1') {
            setLoggedIn(true);
            
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
      <div>
       {!loggedIn ? (
      <Grid container spacing={0}>
            <Grid item xs={7} >
                <Image src='POst.JPG' className=' rounded' style={{height: '620px', width : '750px'}} />
             </Grid>
             <Grid item xs={5}>
                  <Image src='PostGlobal.JPG' style={{marginTop: '10px', marginBottom: '40px'}}/>
                  <p>Enter Your login Id and password to login to PostGlobal. If you have 
                    3 unsuccessful login attempts, your
                    account will be locked .
                   </p>
                   <h3><b>Sign In</b></h3>
                   <div>
                <form style={{ marginTop: '10px' }} onSubmit={handleClick}>
                    <label>Enter your Login ID</label><br />
                    <TextField
                        id="outlined-basic"
                        style={{ marginTop: '10px', marginBottom: '10px', width: '400px' }}
                        label="UserName"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br />
                    <label>Enter your Login Password</label><br />
                    <TextField
                        id="outlined-password-input"
                        style={{ marginTop: '10px', width: '400px', marginBottom: '30px' }}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <div className='button' style={{ marginLeft: '40px' }}>
                        <Button id='btnSubmit' type='submit' style={{ height: '45px', width: '100px', marginRight: '70px' }}>Submit</Button>
                        <Button id='btnCancel' type='button' style={{ height: '45px', width: '100px' }}>Cancel</Button>
                    </div>
                </form>
          </div>
             </Grid>
      </Grid>
      ) : (<Navbar/>)}
     </div>
    );
}

export default App;
