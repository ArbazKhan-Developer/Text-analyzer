import React from "react";
import '../App.css'

function Navbar(props) {
    let style
    if (props.mode !== "light") {
        style ={
            color: "#e6e6e6",
            backgroundColor: "#330000"
        }
    }else{
        style ={
            color: "black"
            
        }
    }
        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-lg background" style={style}>
                <div className="container-fluid">
                    <p className="navbar-brand txt" style={style}>
                        Text Analyzer
                    </p>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === "light" ? "dark" : "light"} mode`}</label>
                    </div>

                </div>
            </nav>
            </React.Fragment>
        );
    }

export default Navbar;