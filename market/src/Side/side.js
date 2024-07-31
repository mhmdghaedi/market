import React ,{useState,useEffect} from "react";
import './side.css';
import { Link,useNavigate } from 'react-router-dom';
import Button from "../Header/button/button";
import Backdrop from "../Backdrop/backdrop";
const Side = (props) =>{

    const navigate = useNavigate();

    let classes = ['side','Close'];
    if(props.show){
        classes=['side','Open']
    }
    const handleClickLogIn = () => {
        navigate('/Log-In');
        
      };
    const handleClickSignUp =() =>{
      navigate('/Sign-Up');
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} modalClosed={props.Close} />
  <div className={classes.join(' ')}>
  
        <div className='logo logo-side'>
            <i className='fa fa-phone'>
            </i>
                    <span>09164626890</span>
                
         </div>
        <nav>
        <div className='men'>
                  <div className="menu-i">
                      <li><Link to='/'>Home</Link></li>
                    </div>  
                  <div className="menu-i">
                    <li><Link to='/About'>About</Link></li>
                    </div>             
                  <div className="menu-i">
                    <li><Link to='/Basket-Shopping'>Basket Shopping</Link></li>
                    </div>             
                  <div className="menu-i">
                    <li className="hide"><Link to='/Panel-Karbari'>Panel</Link></li>
                    </div>             

            </div>
        </nav>
         <div className="btn-side">
         <Button clicked={handleClickSignUp}>Sign Up</Button>
         <Button clicked={handleClickLogIn}>Log In</Button>
         </div>
    </div>
        </React.Fragment>
  
    )

}
export default Side;