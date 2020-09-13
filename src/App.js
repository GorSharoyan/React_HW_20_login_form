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
            userError:'',
            passError:'',
            disabled:true,
        }
    }

  handleUserame=(event)=>{
   if(event.target.value.trim()===''){
     this.setState({
       username:'',
       userError:'Please enter your username!!!',
       disabled:true,
     })
   }
   else{
     this.setState({
       username:event.target.value,
       userError:'',
       disabled:false,
     })
   }
  }

  handlePassowrd=(event)=>{
    if(event.target.value.trim()===''){
      this.setState({
        password:'',
        passError:'Please enter your password!!!',
        disabled:true,
      })
    }
    else{
      this.setState({
        password:event.target.value,
        passError:'',
        disabled:false,
      })
    }
  }
 

  handleSubmit=()=>{
    if((this.state.password.trim()=='')||(this.state.username.trim()=='')){
        this.setState({
          disabled:true
        })
    }
    else {
      localStorage.setItem('state',JSON.stringify(this.state))

      this.setState( {
        username:'',
        password:'',
        userError:'',
        passError:'',
        disabled:true,
    }
      )
  }
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
                 <h5 style={{color: "red"}}>{this.state.userError}</h5>
             </label>
             <label>
                  <h3>Password</h3>
                    <TextField id="outlined-basic" label="Password"
                    variant="outlined" type='password'
                    value={this.state.password}
                   onChange={this.handlePassowrd} />
                  <h5 style={{color: "red"}}>{this.state.passError} </h5>
             </label>
             <hr></hr>
             <label>
                <Button variant="contained" color="primary" 
                href="#contained-buttons" 
                className='btn'
                disabled={this.state.disabled}
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
