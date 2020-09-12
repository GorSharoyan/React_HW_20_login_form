import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

  class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            username:'',
            password:'',
        }
    }
  
    render(){
        return(
     <div>
         <form className='login-form'>
             <label>
                 <h1>Login Form</h1>
             </label>
             <label>
                 <h1>Username</h1>
                 {/* <TextField placeholder='username' type='text' ></TextField> */}
             </label>
             <label>
                 <h1>Password</h1>
                 {/* <TextField placeholder='password' type='password'></TextField> */}
             </label>
             <label>
                <Button> Submit </Button>
                  
             </label>
         </form>
       </div>
            
        )
    }
}
  


export default App;
