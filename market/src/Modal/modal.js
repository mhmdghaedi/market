import React from "react";
import './modal.css';
import '../Backdrop/backdrop';
import Backdrop from "../Backdrop/backdrop";
const Modal=(props)=>{
    return(
        <React.Fragment>
          <Backdrop show={props.show} modalClosed={props.Close}/>
              <div className="Login"
              style={{transform:props.show?'translateX(0)':'translateX(-100vw)',
                opacity:props.show?'1':'0'}}
              >
                   {props.children}
              </div>
        </React.Fragment>
      
    )
}
export default React.memo(Modal);