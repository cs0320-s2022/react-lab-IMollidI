
import React from "react";


type textboxProps = {
    label: string;
    change: Function
};

function TextBox(props: textboxProps) {

    return (

        <div className="TextBox" >
            <label> Enter for {props.label} </label>
            <input type={"text"} onChange={event => props.change(event.target.value)}/>
        </div>

    );
}
export default TextBox;