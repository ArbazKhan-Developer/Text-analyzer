import { useState } from "react";
import React from "react";
import '../App.css'


function Formtext(props) {
    let style
    let textareaStyle
    // let words
    if (props.mode !== "light") {
        style ={
            color: "white",
            backgroundColor: "#000d1a"
        }
        textareaStyle = {
            color: "white",
            backgroundColor: "black"
        }
    }else{
        style ={
            color: "black"
            
        }
        textareaStyle = {
            color: "black",
            backgroundColor: "#e6e6e6"
        }

    }
    let [text, setText] = useState('')
    let textChangetoUP = () => {
        console.log('text change request');
        let newText = text.toUpperCase()
        console.log(newText);
        setText(newText)

    }
    let textChangetoLC = () => {
        let newText = text.toLowerCase()
        console.log(newText);
        setText(newText)
    }
    let handleCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    let handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
    }
    let changehandle = (event) => {
        console.log('change received');
        setText(event.target.value)
    }

    let clearAllText = () => {
        setText("")
    }
    // words = text.length = 0 ? 0 : text.split(" ").length
    return (
        <React.Fragment>
            <div className="container">
                <div className="mb-3 cont" style={style}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Write Your Text
                    </label>
                    <textarea
                        style={textareaStyle}
                        className="form-control textarea"
                        id="exampleFormControlTextarea1"
                        rows={7}
                        value={text}
                        onChange={changehandle}
                    />
                </div>
                <button type="button" className={`btn btn-${props.mode === 'light'? "info": "success"} mx-2 my-1 btn-sm`} onClick={textChangetoUP}>
                    Upper Case
                </button>
                <button type="button" className={`btn btn-${props.mode === 'light'? "info": "success"} mx-2 my-1 btn-sm`} onClick={textChangetoLC}>
                    Lower Case
                </button>
                <button type="button" className={`btn btn-${props.mode === 'light'? "info": "success"} mx-2 my-1 btn-sm`} onClick={handleCopy}>
                    Copy Text
                </button>
                <button type="button" className={`btn btn-${props.mode === 'light'? "info": "success"} mx-2 my-1 btn-sm`} onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button type="button" className={`btn btn-${props.mode === 'light'? "info": "success"} mx-2 my-1 btn-sm`} onClick={clearAllText}>
                    Clear All Text
                </button>

            </div>
            <div className="container my-5" style={style}>
                <h6> Text Summary</h6>
                <div className="para">
                    <p className="paratext">{text.length === 0 ? 0 : text.split(" ").length} words and {text.length} charecter</p>
                </div>
                <p className="myname">Made by Arbaz Khan</p>

            </div>
        </React.Fragment>
    );
}

export default Formtext;
