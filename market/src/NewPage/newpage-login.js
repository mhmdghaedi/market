import React ,{useState,useEffect} from "react";
import './newpage-login.css';
import Bu from '../User/Bu/bu';

const NewPaLog =()=>{
    const[randomnumber1,SetRandomNumber1] = useState(0);
    const[randomnumber2,SetRandomNumber2] = useState(0);
    const[sumHolder,SetSumHolder] = useState(0);
    const[captchaValue,SetCaptchaValue] = useState(0);
    const[errorMessage,SetErrorMessage] = useState('');
    const[username,SetUsername] = useState('');
    const[password,SetPassword] = useState('');
 


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
        if(username===''){
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
    const loginHandler=()=>{
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

    return(
       <React.Fragment>
         <div className="NewPaLog">
         <p style={{color:'red',fontSize:'56'}}>{errorMessage}</p>
         <div className="login">
            <h3 className='h'>email</h3>
           <input type="email" placeholder="Email" value={username} onChange={usernameHandler}/>
           <h3 className='h'>password</h3>
           <input type="password" placeholder="Password" value={password} onChange={passwordHandler}/>
           <div className='captcha_view'>
            <p className='p'>{randomnumber1} + {randomnumber2}</p>
            <input type='text' onChange={captchaHandler}/>
           

            <div className='icon'>
                <i onClick={generateCaptcha} className='fa fa-retweet re fa-2x'></i>
              
            </div>
           </div>
          
           <Bu clicked={loginHandler} >ورود</Bu>
       </div>
            </div>
       </React.Fragment>
    )
}
export default NewPaLog;