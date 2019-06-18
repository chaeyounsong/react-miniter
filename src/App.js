import React from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
function App() {
  console.log('ddd')
  return (

      <div>
          
          <div id = "header">
            <h2>Log in to Miniter</h2>
          </div>
          
          <div id = "inputbox">
          <input type="text" class="form-control" name="userid" placeholder="Enter ID" required="" autofocus="" />
          <br/>
          </div> 
          
          <div id = "inputbox">
          <input type="text" class="form-control" name="password" placeholder="Password" required="" autofocus="" />
          </div>
           
          <div id = "button">
          <button>Log in</button>  
          </div>
    
      </div>
  )    
}
export default App;
