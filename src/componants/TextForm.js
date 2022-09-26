
import React, {useState} from 'react'



export default function TextForm(props) {

    const handleClearClick = ()=>{
        // console.log("uppercase button clicked" + text);
        setText("");
    }

    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Your Text On Clipboard" , "sucess");
    }

   const  handleSpaceClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Remove Extra Space" , "sucess");
   }
   


    const handleUpClick = ()=>{
        // console.log("uppercase button clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To Uppercase" , "sucess");
    }

    const handleLowerClick = ()=>{
        // console.log("you have clicked the lower case button" + text);
        let newText = text.toLocaleLowerCase();

        setText(newText);
        props.showAlert("Converted To Lowercase" , "sucess");
    }

    const handleOnChange =(event) => {
        // console.log("on Change");
        setText(event.target.value);
        }

    const [text , setText] = useState('Enter Text Here');
    return (
        <>
        <div>
            <h1 style={{color:props.mode === 'dark'?'white':'black' }}>{props.heading}</h1>
            <div className=  "mb-3" style={{color:props.mode === 'dark'?'white':'black' }}> 
                {/* <label form="myBox" className="form-lable"></label> */}
                <textarea className="form-control" value= {text} style={{backgroundColor: props.mode === 'dark'?'#4a4b85':'white', color:props.mode === 'dark'?'white':'black' }} aria-label="With textarea" onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} id="myBtn" className="btn btn-primary mx-2">Convert to UpperCase</button>
            <button type="button" onClick={handleLowerClick} id="myBtn" className="btn btn-primary mx-2">Convert to LowerCase</button>
            <button type="button" onClick={handleClearClick} id="myBtn" className="btn btn-primary mx-2">Clear Text</button>
            <button type="button" onClick={handleCopyClick} id="myBtn" className="btn btn-primary mx-2">Copy Text</button>
            <button type="button" onClick={handleSpaceClick} id="myBtn" className="btn btn-primary mx-2">Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black' }}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes To Read Words</p>
            <h1>Preview Of Your Text</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
