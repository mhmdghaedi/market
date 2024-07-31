import React from "react";
import './bu.css';
import PropTypes from 'prop-types';
const Bu = (props) =>{
    return(
        <div className="bu">
         <button
        onClick={props.clicked}
        >
        {props.children}
        </button>
    </div>
    )
} 
export default React.memo(Bu);
Bu.propTypes={
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func.isRequired,
    btnType:PropTypes.string
}