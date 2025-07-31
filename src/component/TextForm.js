import React, { useState } from 'react'
import './TextForm.css';
export default function TextForm(props) {
    const handleUpclick = () => {
        console.log('Upper Case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert(":Converted into uppercase", "success");
    }
    const handleloclick = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert(":Converted into LowerCase", "success");
    }
    const clear = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = "";
        setText(newText)
        props.showalert(":Text field was cleared", "success");
    }
    const handleOnchange = (event) => {
        console.log('on change')
        setText(event.target.value)
    }

    // copy to clicp board
    const copy = () => {
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
        // .then(() => {
        //     // alert('Text copied to clipboard!');
        // })
        // .catch((err) => {
        //     console.error('Failed to copy: ', err);
        // })
        props.showalert(":Text Copied!", "success");
    }

    const [text, setText] = useState('');

  return (
    <>
        <div className='container'>
            <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUpclick}>Convert into uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleloclick}>Convert into lower case</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={clear}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2 button" id='button' onClick={copy}>
                        Copy Text
                            <span className="tooltip" id="tool">
                                Copy to clip board
                            </span>
                    </button>
                </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!=0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!=0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Nothing to Preview"}</p>
        </div>
    </>
  )
}