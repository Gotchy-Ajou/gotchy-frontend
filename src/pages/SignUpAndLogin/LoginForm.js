import './style.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setShowSignup, setUserId, setUserName, setUserOption } from '../../redux/action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showSignup = useSelector((state => state.showSignup))

    const [serial, setSerial] = useState([]);
    const [id, setId] = useState([]);
    const [pw, setPw] = useState([]);
    const [hovered, setHovered] = useState(false);

    const saveSerial = event => {
        setSerial(event.target.value);
    };

    const saveUserId = event => {
        setId(event.target.value);
    };

    const saveUserPw = event => {
        setPw(event.target.value);
    };

    const clickSignup = () => {
        dispatch(setShowSignup(!showSignup));
        props.setUserOption(props.option);
    };

    const clickLogin = () => {
        if (props.option == "1") {
            props.setUserOption(props.option);
            localStorage.setItem('useroption', (props.option - 0));
            dispatch(setUserOption((props.option - 0)));
            alert("유효하지 않은 ID/비밀번호입니다!");
            console.log("hi");
            navigate('/Inquiry');
        }
        if (props.option == "2") {
            props.setUserOption(props.option);
            localStorage.setItem('useroption', (props.option - 0));
            dispatch(setUserOption((props.option - 0)));
            alert("유효하지 않은 ID/비밀번호입니다!");
            console.log("hi");
            navigate('/UserManage');
        }
        // axios.post("http://gotchy.site/login", {
        //     "user_id": id,
        //     "user_pw": pw,
        //     "option": (props.option - 0)
        // }).then((res) => {
        //     console.log(res.data)
        //     if (res.data.name !== "Error") {

        //         //alert('로그인!');
        //         console.log(res.data)
        //         if (props.option == "2") {
        //             console.log("admin")
        //             localStorage.setItem('userid', res.data.user_id);
        //             dispatch(setUserId(res.data.user_id));
        //         }
        //         else {
        //             localStorage.setItem('userid', res.data.id);
        //             dispatch(setUserId(res.data.id));
        //         }
        //         localStorage.setItem('username', res.data.name);
        //         dispatch(setUserName(res.data.name));
        //         localStorage.setItem('useroption', (props.option - 0));
        //         dispatch(setUserOption((props.option - 0)));

        //         if (props.option == "1") {
        //             console.log("hi");
        //             navigate('/');
        //         }
        //         if (props.option == "2") {
        //             console.log("hi");
        //             navigate('/');
        //         }
        //     }
        //     else {
        //         alert('실패')
        //     }
        // })

    };


    return (
        <div className='login_form'>

            <div className="login_box login_sid">
                <div className="login_name">ID</div>
                <input type="text" value={id} onChange={saveUserId} />
            </div>

            <div className="login_box pw">
                <div className="login_name">PW</div>
                <input type="password" value={pw} onChange={saveUserPw} />
            </div>

            {(props.option === '1') ?
                <div className="signupButton">
                    <h1 className="login_subtitle">아직 회원이 아니신가요?</h1>
                    <span className="signup_button" onClick={clickSignup}>회원가입</span>
                </div>
                : <span className="signup_button"></span>}
            <div className="login_button" onClick={clickLogin}>로그인</div>
        </div>
    );
};