import React from "react";
import './backdrop.css';
const Backdrop=(props)=>(
    props.show?<div onClick={props.modalClosed} className="Backdrop"></div>:null
)
export default Backdrop;