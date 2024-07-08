import React, {useState} from 'react'


export default function Textform(props) {

    const [text,setText] = useState('');
   // const [extractedNumbers, setExtractedNumbers] = useState([]);


    
    const handleUpperClick=()=>{
        console.log("uppercase button clicked");
        // setText('You have clicked on handleUpperClick' + text);
        let newtext = text.toUpperCase();
        setText(newtext);



    }
    const handleLowerClick=()=>{
        console.log("lowercase button clicked");
        // setText('You have clicked on handleUpperClick' + text);
        let newtext = text.toLowerCase();
        setText(newtext);


    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleclearClick=(event)=>{
        console.log("Clear button clicked ");
        let clr = " "
        setText(clr)  
  }
  const handlecopyClick=(e)=>{
    console.log('I am copied');
    let copytext=document.getElementById('myBox');
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  }
    
  const handlespaceClick=(e)=>{
  console.log('Extra spaces removed');
      let newtext =text.split(/[ ]+/);
       setText(newtext.join(" "));
  }

  const handleextractnumbersClick=(e)=>{
    let numbers = text.match(/\d+/g);
    if (numbers) {
        numbers = numbers.map(Number);
         setText(numbers.join(', ')); 
        console.log('Extracted numbers:', numbers);
        
    } else {
        console.log('No numbers found in the input text.');
    }
  }
  
      //text ='new text ' //wrong way to change text
    //setText('new text') //correct way to change text
    // setText('Enter text here..')

  

  return ( 
  

    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black' }}>
        <h2>{props.heading}</h2>
  
       <div className="mb-3">
      
      <textarea className="form-control"  value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} id="myBox" rows="9"></textarea>

       </div>
       <button className="btn btn-success mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
       <button className="btn btn-success "  onClick={handleLowerClick}>Convert to Lowercase</button>
       <button className="btn btn-success mx-2"  onClick={handleclearClick}>Clear text</button>
       <button className="btn btn-success"  onClick={handlecopyClick}>Copy text</button>
       <button className="btn btn-success mx-2"  onClick={handlespaceClick}>Remove Extra Spaces</button>
       <button className="btn btn-success mx-2"  onClick={handleextractnumbersClick}>Extract Numbers</button>

       {/* <button className="btn btn-success mx-2"  onClick={handlemodeClick} >Dark Mode</button> */}
    </div>
 
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
            {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textbox to preview it here"}</p>
    </div>

    </>
    
  )
}