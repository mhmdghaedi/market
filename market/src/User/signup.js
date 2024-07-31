import React, { useState, useEffect } from 'react';
import Bu from './Bu/bu';
import './signup.css';

const Signup = (props)=>{
    const[randomnumber1,SetRandomNumber1] = useState(0);
    const[randomnumber2,SetRandomNumber2] = useState(0);
    const[sumHolder,SetSumHolder] = useState(0);
    const[captchaValue,SetCaptchaValue] = useState(0);
    const[errorMessage,SetErrorMessage] = useState('');
    const[username,SetUsername] = useState('');
    const[password,SetPassword] = useState('');
    const[name,setName] = useState('');
    const[lname,setLname] = useState('');
    useEffect(()=>{
        generateCaptcha();
    },[])
    const generateCaptcha=()=>{
        let number1 = Math.floor(Math.random()*10)+1;
        let number2 = Math.floor(Math.random()*10)+1;
        SetRandomNumber1(number1);
        SetRandomNumber2(number2);
        let sum = number1 + number2;
        SetSumHolder(sum);
    }
    const captchaHandler=(event)=>{
        SetCaptchaValue(Number(event.target.value));
    }
    const validate=()=>{
        if(name===''){
            SetErrorMessage('Please enter your Name');
            return false;
        }
        else if(name.length > 25){
            SetErrorMessage('Name should not be more than 25 characters');
            return false;
        }
        
        else if(lname===''){
            SetErrorMessage('Please enter your Last Name');
            return false;
        }
        else if(lname.length > 25){
            SetErrorMessage('Last Name should not be more than 25 characters');
            return false;
        }
        else if(username===''){
            SetErrorMessage('Please enter your Email');
            return false;
        }
        else if(!username.includes('@') || !username.includes('.')){
            SetErrorMessage('Invalid Email');
            return false;
        }
        else if(password===''){
            SetErrorMessage('Please enter your Password');
            return false;
        }
        else if(password.length < 8){
            SetErrorMessage('Password must be at least 8 characters long');
            return false;
        }
        SetErrorMessage('');
        return true;
    }
    const SignupHandler=()=>{
        if(captchaValue === sumHolder){
            SetErrorMessage('');
            const validateResult = validate();
            if(validateResult){
                console.log('http request sent')
            }
        }
        else{
            SetErrorMessage('captcha invalid');
            return false;
        }

    }
    const usernameHandler=(event)=>{
        SetUsername(event.target.value);
    }
    const passwordHandler=(event)=>{
        SetPassword(event.target.value);
    }
    const nameHandler =(event)=>{
        setName(event.target.value);
    }
    const lnameHandler =(event)=>{
        setLname(event.target.value);
    }
    return(
        <React.Fragment>
             <p style={{color:'red',fontSize:'56'}}>{errorMessage}</p>
            <div className='Signup'>
                <h3 className='h h-s'>name</h3>
                <input type='text' placeholder='name' className='input-s' value={name} onChange={nameHandler}/>
                <h3 className='h h-s'>last name</h3>
                <input type='text' placeholder='lastname' className='input-s'  value={lname} onChange={lnameHandler}/>
                <h3 className='h h-s'>email</h3>
                <input type="email" placeholder="Email" value={username} onChange={usernameHandler} className='input-s'/>
                <h3 className='h h-s'>password</h3>
                <input type="password" placeholder="Password" value={password} onChange={passwordHandler} className='input-s'/>
                <div className='captcha_view'>
                <p className='pa'>{randomnumber1} + {randomnumber2}</p>
                <input type='text' onChange={captchaHandler} className='input-s'/>
                <div className='icon'>
                <i onClick={generateCaptcha} className='fa fa-retweet re fa-2x'></i>
              
            </div>
            </div>
                 <Bu clicked={SignupHandler} >ثبت نام</Bu>
            </div>
        </React.Fragment>
    )
}
export default Signup;