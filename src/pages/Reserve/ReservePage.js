import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "reactstrap";
import Guide from "./Guide.jpg"

const logoStyle = {
  width: 'auto',
  height: '360px',
  marginTop: '30px',
  marginBottom: '20px',
};

const ReservePage = () => {
  const today = new Date();
  const TODAY = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(today.getDate()).padStart(2, '0')}`;

  const hobbyList = [
    '축구',
    '농구',
    '야구',
    '족구',
    '탁구',
    '배드민턴',
    '테니스',
    '합주',
    '노래',
    '춤',
    '독서토론',
    '보드게임'
  ];
  const locationList = [
    '서울',
    '경기',
    '인천',
    '강원',
    '대전',
    '충남/세종',
    '충북',
    '대구',
    '경북',
    '부산',
    '울산',
    '경남',
    '광주',
    '전남',
    '전북',
    '제주'
  ];
  const genderList = ['남자', '여자'];
  const levelList = ['비기너', '아마추어', '프로'];

  const [data, setData] = useState({
    gotchyId: `${Math.floor(Math.random() * 100000) + 100000}`,
    location: null,
    gotchyHobby: null,
    gender: null,
    level: null,
    mode: "YES",
    photoUrl: null,
    gotchyName: "뿡뿡",
    price: null,
    headcount: null,
    useTime: null,
    modifiedDate: TODAY,
    createdDate: TODAY,
    gotchyDate: null,
    gotchyTime: null,
  });
  const { gotchyDate, gotchyTime, location, gotchyName,gotchyHobby, gender, headcount, useTime, price, level } = data;

  //axios
  function ReserveDataSubmit() {
    console.log('1',data);
    axios.post('http://localhost:3000/api/v1/gotchy',
    {
      'gotchyDate': data.gotchyDate,
      'gotchyTime': data.gotchyTime,
      'location':data.location,
      'gotchyHobby': data.gotchyHobby,
      'gender':data.gender,
      'level':data.level,
      'headcount':data.headcount,
      'price':data.price,
      'gotchyName':data.gotchyName,
      "mode":data.mode,
      "useTime":data.useTime
    })
      .catch((err) => {
        console.log("등록 error");
        console.log(err);
    });
  };
    function postData()  {
         axios.post('http://localhost:3000/api/v1/gotchy',
            {
          'gotchyDate': data.gotchyDate,
              'gotchyTime': data.gotchyTime,
              'location':data.location,
              'gotchyHobby': data.gotchyHobby,
              'gender':data.gender,
              'level':data.level,
              'headcount':data.headcount,
              'price':data.price,
              'gotchyName':data.gotchyName,
              "mode":data.mode,
              "useTime":data.useTime
        });
        
      
    };


  const onReserveData = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
      <>
        <div className="notice-write-title">새로운 가치를 등록해주세요!</div>
        <div style={{ "text-align": "center" }}>
          <img src={Guide} alt="Guide" style={logoStyle} />
        </div>
        <MainDiv>

          <SelectContainer>
            <label>취미</label>
            <select name="gotchyHobby" value={gotchyHobby} onChange={(e) => onReserveData(e)} required>
              <option value="" selected>취미</option>
              {hobbyList.map((option) => (
                  <option
                      key={option}
                      value={option}
                  >
                    {option}
                  </option>
              ))}
            </select>

            <label>날짜</label>
            <input
                type="date"
                name="gotchyDate"
                onChange={onReserveData}
                value={gotchyDate}
            />

            {/* <label>시작 시간</label>
            <input
                type="text"
                name="gotchyTime"
                placeholder="시작 시간을 입력해주세요."
                value={gotchyTime}
                onChange={onReserveData}

            /> */}
          
          <label>시작 시간</label>
          <input
            type="time"
            name="gotchyTime"
            onChange={onReserveData}
            value={gotchyTime}
          />


            <label>위치</label>
            <select name="location" value={location} onChange={e => onReserveData(e)} required>
              <option value="" selected>위치</option>
              {locationList.map((option) => (
                  <option
                      key={option}
                      value={option}
                  >
                    {option}
                  </option>
              ))}
            </select>



            <label>인원 수</label>
            <input
                type="number"
                name="headcount"
                placeholder="인원 수를 입력해주세요."
                onChange={onReserveData}
                value={headcount}
            />




            <label>이용시간</label>
            <input
                type="text"
                name="useTime"
                placeholder="이용시간을 입력해주세요."
                value={useTime}
                onChange={onReserveData}
            />



            <label>성별</label>
            <select name="gender" value={gender} onChange={(e) => onReserveData(e)}>
              <option value="" selected>성별</option>
              {genderList.map((option) => (
                  <option
                      key={option}
                      value={option}
                  >
                    {option}
                  </option>
              ))}
            </select>


          <label>레벨</label>
          <select name="level" value={level} onChange={(e) => onReserveData(e)}>
            <option value="" selected>레벨</option>
            {levelList.map((option) => (
                <option
                    key={option}
                    value={option}
                >
                  {option}
                </option>
            ))}
          </select>


          <label>보증금</label>
          <input
              type="number"
              name="price"
              placeholder="보증금을 입력해주세요."
              onChange={onReserveData}
              value={price}
          />
          <ButtonWrapper>
          <button onClick={() => {
            if (!gotchyDate ||  !gotchyTime || !location || !gotchyHobby || !gender || !headcount || !useTime || !price || !level)
              alert('내용을 모두 입력해주세요..');
            else {
              // api 요청.then (() => {
              // alert('등록 L.');
              postData()
              window.location.href = '/guide';
              //})
            }
          }}>등록</button>
          </ButtonWrapper>
        </SelectContainer>
      </MainDiv>
    </>
  );
};

export default ReservePage;

const SelectContainer = styled.div`
  margin-top: 50px;
  width: 60%;
  /* height: 500px; */
  border: 2px solid #8f23c0;
  border-radius: 15px;
  padding: 35px 55px 95px;

  label {
    font-size: 14px;
  }

  > select,
  > input {
    border: 2px solid #888;
    width: 100%;
    height: 7%;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    display: flex;
  }

  > select {
    border: 2px solid #888;
    width: 100%;
    height: 7%;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    display: flex;
  }
`;

const ButtonWrapper = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;

  > button {
    margin-top: 20px;
    margin-bottom: 250px;
    width: 250px;
    height: 50px;
    background-color: #8f23c0;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #b100cd;
    color: #fff;
  }

`;

const MainDiv = styled.div`
  height: 1000px;
  display: flex;
  text-decoration: underline #a000c8;
  text-underline-position: under;
  text-underline-offset: 8px;
  padding: 0.5em;
  flex-direction: column;
  align-items: center;

  * {
    outline: none;
  }

  > h1 {
    margin: 0;
  }
`;