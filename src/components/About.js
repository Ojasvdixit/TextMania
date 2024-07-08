
import React, { useState } from 'react'

export default function About() {
  // let mystyle={      //It is Object
  //     Color: 'white',
  //     backgroundColor:'black'

  // }

  const [mystyle,setmyStyle]=useState({
    Color: 'black',                                //initial values
   backgroundColor:'white'
 
  })

  const[btntext,setbtntext]=useState('Enable dark Mode');


  const togglestyle =()=>{
    if(mystyle.Color === 'white' ){
      setmyStyle(
        {
          Color:'black', backgroundColor:'white'
        }
      )
      setbtntext('Enable Dark Mode');
    }
    else{
      
      setmyStyle(
        {
          Color:'white', backgroundColor:'black'
        }
      )
      setbtntext('Enable Light Mode');
      
    }
  }
  return (
<>
    <div className='container' style={mystyle}>
    <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the Description abut Textutils -</strong>  TextUtils application is a React component designed to provide various text manipulation features to the user. It allows users to input text and perform several operations on it, such as converting to uppercase, converting to lowercase, clearing the text, copying the text, removing extra spaces, and extracting numbers. The component also provides a summary of the text, including word count, character count, and an estimated reading time. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div >
    <button onClick={togglestyle} className='btn btn-success my-4 mx-1' > {btntext}</button>
  </div>

      
    </div>
   
  </>
  )
}
