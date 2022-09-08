import React from "react";


export default function Preview(props) {
    console.log(props);
    return (
        <React.Fragment>
            <div className="container">
                <p>helle</p>
                <p>props.previewText</p>
            </div>
        </React.Fragment>
    )
}