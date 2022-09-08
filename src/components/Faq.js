import React from "react";

export default function Faq(props) {
    let style
    let textareaStyle
    if (props.mode !== "light") {
        style ={
            color: "white",
            backgroundColor: "#333300"
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


    return (

        <React.Fragment>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={textareaStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={style}
                        >
                            What is Text Analyzer
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Text Analyzer.</strong> It is use to analysis the text
                            where we can convert the text in uppercase, lowercase, remove 
                            extra spaces.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={textareaStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={style}
                        >
                            Convert to Uppercase
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Convert to Uppercase.</strong> we can convert all text in uppercase
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={textareaStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={style}
                        >
                            Convert to Lowercase
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <strong>Convert to Lowercase.</strong> we can convert all text in Lowercase
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={textareaStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={style}
                        >
                            Remove Extra spaces
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Remove Extra spaces</strong> by this method we can remove all extra spaces
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}