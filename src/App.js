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
                 <h3>Username</h3>
                 <TextField id="outlined-basic" label="Username" variant="outlined" type='text'
                    value={this.state.step} onChange={this.handleStep} />
             </label>
             <label>
                 <h3>Password</h3>
                 <TextField id="outlined-basic" label="Password" variant="outlined" type='password'
                    value={this.state.step} onChange={this.handleStep} />
             </label>
             <hr></hr>
             <label>
                <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.handleSubmit} >
                 <h3>Submit</h3>
               </Button>
                  
             </label>
         </form>
       </div>
            
        )
    }
}
  


export default App;
