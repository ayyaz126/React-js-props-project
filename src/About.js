import React from 'react'

function About(props) {
 
    
  return (
    <div> 
        <h1> This is my new projecy </h1>
        <img src='/img/car.imgs.jpg'  />
        <h3> {props.abc}   </h3>
      
    </div>

  )
}

export default About;