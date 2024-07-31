import React from "react";
import './button.css';
import PropTypes from 'prop-types';
const Button = (props) =>{
    return(
        <div className="button">
         <button
        onClick={props.clicked}
        >
        {props.children}
        </button>
    </div>
    )
} 
export default React.memo(Button);
Button.propTypes={
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func.isRequired,
    btnType:PropTypes.string
}