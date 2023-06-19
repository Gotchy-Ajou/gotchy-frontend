import './style.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSignup } from '../../redux/action';

export const SignUpForm = (props) => {
  let genderOption = [
    { option: 1, value: "남자" },
    { option: 2, value: "여자" }
  ]
  let regionOption = [
    { option: 1, value: "서울" }, { option: 2, value: "경기" }, { option: 3, value: "인천" }, { option: 4, value: "강원" },
    { option: 5, value: "대전" }, { option: 6, value: "충남/세종" }, { option: 7, value: "충북" }, { option: 8, value: "대구" },
    { option: 9, value: "경북" }, { option: 10, value: "부산" }, { option: 11, value: "울산" }, { option: 12, value: "경남" },
    { option: 13, value: "광주" }, { option: 14, value: "전남" }, { option: 15, value: "전북" }, { option: 16, value: "제주" }
  ]

  const dispatch = useDispatch();
  const showSignup = useSelector((state => state.showSignup))

  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [id, setId] = useState([]);
  const [pw, setPw] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [gender, setGender] = useState([]);
  const [age, setAge] = useState([]);
  const [region, setRegion] = useState([]);

  const saveName = event => {
    setName(event.target.value);
  };
  const savePhone = event => {
    setPhone(event.target.value);
  };

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const saveNickname = event => {
    setNickname(event.target.value);
  };

  const saveGender = event => {
    setGender(event.target.value);
  };

  const saveAge = event => {
    setAge(event.target.value);
  };

  const saveRegion = event => {
    setRegion(event.target.value);
  };

  const register = () => {
    alert("성공적으로 회원가입이 완료되었습니다!");
    // axios.post("http://gotchy.site/signup", {
    //   "name": name,
    //   "phone": phone,
    //   "user_id": id,
    //   "user_pw": pw,
    //   "nickname": nickname,
    //   "gender": gender,
    //   "age": age,
    //   "region": region,
    //   "option": (props.option - 0)
    // }).then((res) => {
    //   console.log(res.data)
    //   if (res.data == "success") {
    //     dispatch(setShowSignup(!showSignup));
    //     alert('회원가입 되었습니다!');
    //   }
    //   else {
    //     alert('실패')
    //   }
    // })
  }

  return (
    <div className="signup">
      <div className="box name">
        <div className="name">이름</div>
        <input type="text" value={name} onChange={saveName} placeholder=" ex) 김가치" required="" />
      </div>
      <div className="box phone">
        <div className="name">전화번호</div>
        <input type="text" value={phone} onChange={savePhone} placeholder=" ex) 010-1234-5678" required="" />
      </div>
      <div className="box id">
        <div className="name">아이디</div>
        <input type="text" value={id} onChange={saveUserId} placeholder=" 아이디" required="" />
      </div>
      <div className="box pw">
        <div className="name">비밀번호</div>
        <input type="password" value={pw} onChange={saveUserPw} placeholder=" 비밀번호" required="" />
      </div>
      <div className="box nickname">
        <div className="name">닉네임</div>
        <input type="text" value={nickname} onChange={saveNickname} placeholder=" ex) 가치별명" required="" />
      </div>
      <div className="box gender">
        <div className="name">성별</div>
        <select id="gender" name="gender" value={gender} onChange={saveGender} required>
          <option value="" selected>성별을 선택하세요.</option>
          {genderOption.map((el) => (
            <option
              key={el.option}
              value={el.value}
            >
              {el.value}
            </option>
          ))}
        </select>
      </div>
      <div className="box age">
        <div className="name">나이</div>
        <input type="number" value={age} onChange={saveAge} placeholder=" 나이" required="" />
      </div>
      <div className="box region">
        <div className="name">지역</div>
        <select id="gender" name="gender" value={gender} onChange={saveGender} required>
          <option value="" selected>지역을 선택하세요.</option>
          {regionOption.map((el) => (
            <option
              key={el.option}
              value={el.value}
            >
              {el.value}
            </option>
          ))}
        </select>
      </div>
      <div className="loginButton" onClick={register}>회원가입하기</div>
    </div>
  );
}