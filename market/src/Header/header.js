import React,{useState,useEffect} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Button from './button/button';
import Modal from '../Modal/modal';
import Login from '../User/login';
import Side from '../Side/side';
import { useLocation } from 'react-router-dom';
import Signup from '../User/signup';
function Header(props) {
    const location = useLocation();
    let classL1 = ['line','hide-line'];
    let classL2 = ['line','hide-line'];
    let classL3 = ['line','hide-line'];
    let classL4 = ['line','hide-line'];
    if(location.pathname === '/'){
        classL1.push('active');
    }
    if(location.pathname === '/About'){
        classL2.push('active');
    }
    if(location.pathname === '/Basket-Shopping'){
        classL3.push('active');
    }
    if(location.pathname === '/Panel-Karbari'){
        classL4.push('active');
    }
    useEffect(() => {
        setOpenSide(false);
      }, [location.pathname]);


    const[showModal,setShowModal] = useState(false);
    const[openSise,setOpenSide] = useState(false);
    const[Modal2,setModal2] = useState(false);
    const login=()=>{
      setModal2(!Modal2);
    }
    const signup=()=>{
        setShowModal(!showModal);
    }
    const sideHandler=()=>{
        setOpenSide(true);
    }
    const Close = ()=>{
        setOpenSide(false);
    }
    const CloseModal =()=>{
        setShowModal(false);
        setModal2(false);
    }
    return(
        <header className='header'>
            <Side show={openSise} Close={Close}/>
             <div onClick={sideHandler} className='ico-sm'>
            <i className="fa fa-bars"></i> 
            </div>
            <div className='show'>
            <div className='logo'>
            <i className='fa fa-phone'>
            </i>
                    09164626890
                
            </div>
          
            <div className='button'>
         
            <Button clicked={login}>Log In</Button>
            {
                <Modal show={showModal} Close={CloseModal}>
                    <Signup/>
                </Modal>
            }
            <Button clicked={signup}>Sign Up</Button>
            {
                <Modal show={Modal2}  Close={CloseModal} >
                <Login/>
               </Modal>
            }
            </div>
              <div className='menu'>
                    <li className='menu-item'><Link to='/'>Home</Link>
                    <div className={classL1.join(' ')}></div>
                    </li>
                    <li className='menu-item'><Link to='/About'>About</Link>
                    <div className={classL2.join(' ')}></div>
                    </li>
                    <li className='menu-item'><Link to='/Basket-Shopping'>Basket Shopping</Link>
                    <div className={classL3.join(' ')}></div>
                    </li>
                    <li className='menu-item hide'><Link to='/Panel-Karbari'>Panel</Link>
                    <div className={classL4.join(' ')}></div>
                    </li>
                               
            </div>
            </div>
        </header>
    );
    
}

export default Header;

