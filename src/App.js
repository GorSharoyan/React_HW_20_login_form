import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
  class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            username:'',
            password:'',
        }
    }
    // handleLoginInput=()=>{
        
    // }
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
                
                  
             </label>
         </form>
       </div>
        // <div>  
        //     <footer>
        //         <hr></hr>
        //         <p>(C) Copyright Gor SHAROYAN /</p>
        //         <p> UI created by using :https://material-ui.com</p>
        //     </footer>
        // </div>            
        )
    }
}
  


export default App;
