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

  handleUserame=(event)=>{
    // if(typeof(event.target.value)!=='string'){
    //    throw new Error('invalid username')
    // }else{
      this.setState({
        username:event.target.value
      })
    }
  // }

  handlePassowrd=(event)=>{
    // if(typeof(event.target.value)!=='number'){
    //     throw new Error('invalid password')
    // }else{
      this.setState({
        password:event.target.value
      })
    }
  // }

  handleSubmit=()=>{
    localStorage.setItem('state',JSON.stringify(this.state))
  }

    render(){
        return(
     <div>
         <form className='login-form' onSubmit={this.handleSubmit}>
             <label>
                 <h3>Username</h3>
                 <TextField id="outlined-basic" label="Username"
                    variant="outlined" type='text'
                    value={this.state.username} 
                    onChange={this.handleUserame} />
             </label>
             <label>
                 <h3>Password</h3>
                 <TextField id="outlined-basic" label="Password"
                   variant="outlined" type='password'
                   value={this.state.password}
                    onChange={this.handlePassowrd} />
             </label>
             <hr></hr>
             <label>
                <Button variant="contained" color="primary" 
                href="#contained-buttons" 
                className='btn'
                onClick={this.handleSubmit} >
                 <h5>Log In</h5>
               </Button>
                  
             </label>
         </form>
       </div>
            
        )
    }
}
  


export default App;
