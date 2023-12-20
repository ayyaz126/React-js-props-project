import React from 'react';
import About from './About';
import  './App.css';

function App(  ) {
 const name = "this is new simpal";
  return (
    <div>
     
      <h1  style={{ color: "red", fontSize:"100px" }}  > This is new back </h1>
      <hr/>
      <p id='demo'>  This is new project in js </p>
      
      <About  abc={name}  />
   
    </div>
  )
}

export default App;