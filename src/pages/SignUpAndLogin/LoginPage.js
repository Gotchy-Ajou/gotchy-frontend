import './style.css';
import Gotchy from "../../components/Layout/Gotchy.png"
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from './SignUpForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSignup } from '../../redux/action';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const showSignup = useSelector((state => state.showSignup))
  const [userOption, setUserOption] = useState("1");
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const clickClose = () => {
    dispatch(setShowSignup(!showSignup));
  };
  const clickradio = (e) => {
    console.log(e.target.value);
    setUserOption(e.target.value);
  };
  const option2name = (num) => {
    switch(num){
      case "1":
        return "회원"
      case "2":
        return "관리자"
    }
  };

  const logoStyle = {
    width: 'auto', 
    height: '100px', 
    marginTop: '30px',
    marginBottom: '20px'

  };

  const loginFormWrapperStyle = {
    backgroundColor: 'white',
    borderRadius: '30px',
    paddingRight: '10px',
    paddingLeft: '10px',
    width: '50%',
    margin: '45px auto', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    height: '90%',

  };

  return (
    <div style={{ ...loginFormWrapperStyle, fontFamily: "Eorinai" }} className='login_page'>
      {showSignup ? <div className="blur"></div> : null}

        <div className='radioGroup'>
          <input type='radio' value="1" id="1" checked={userOption == "1"} onChange={clickradio}/> <label for="1">회원</label>
          <input type='radio' value="2" id="2" checked={userOption == "2"} onChange={clickradio}/> <label for="2">관리자</label>
        </div>

        <img src={Gotchy} alt="Gotchy" style={logoStyle} />
        <h1 className="login_title">가치, 장소를 대여해주는 취미 모임 플랫폼</h1> 

        <LoginForm option={userOption} setUserOption={setUserOption} title={option2name(userOption)} />
          {showSignup ? <span className="signupClose" onClick={clickClose}>X</span> : null}
          {showSignup ? <SignUpForm option={userOption} /> : null}
    </div>
  );
};