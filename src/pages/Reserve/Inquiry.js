import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SelectDiv from './SelectDiv';
import { NavLink } from "reactstrap";
import Guide from "./Guide.jpg"

const logoStyle = {
  width: 'auto',
  height: '360px',
  marginTop: '30px',
  marginBottom: '20px',
};

const Inquiry = () => {
  const locationList = [
    '모든 지역',
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
    '제주',
  ];
  const hobbyList = ['모든 취미', '축구', '농구', '족구', '탁구', '배드민턴', '테니스', '합주(밴드, 오케스트라)', '노래', '춤', '독서토론', '보드게임'];
  const genderList = ['성별', '남자', '여자'];
  const levelList = ['레벨', '비기너', '아마추어', '프로'];
  const modeList = ['개인 모집 여부', 'YES', 'NO'];

  const today = new Date();
  const [gotchyList, setGotchyList] = useState([])

  // 전체 데이터 로드
  const loadFilterData = async () => {
    await axios.get('http://localhost:3000/api/v1/gotchy')
      .then(function (response) {
        setGotchyList(response.data.responseData.map(function (el) {
          console.log(el);

          var returnObj = {}
          returnObj['gotchyDate'] = el.gotchyDate;
          returnObj['gotchyTime'] = el.gotchyTime;
          returnObj['location'] = el.location;
          returnObj['gotchyHobby'] = el.gotchyHobby;
          returnObj['gender'] = el.gender;
          returnObj['level'] = el.level;
          returnObj['mode'] = el.mode;

          return returnObj;
        }));
      }).catch(function (reason) {
        console.log(reason);
      });
  };

  useEffect(() => {
    loadFilterData();
  }, []);

  const [filter, setFilter] = useState({
    gotchyDate: "",
    gotchyTime: "",
    location: "",
    gotchyHobby: "",
    gender: "",
    level: "",
    mode: ""
  });
  const { gotchyDate, gotchyTime, location, gotchyHobby, gender, level, mode } = filter;

  const onFilterChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // 필터링
  const submitFilter = async (e) => {
    console.log(filter);
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/gotchyfilter", { filter })
      .then((response) => {
        console.log("필터링 success");
        console.log(response.data);

        setGotchyList(response.data.responseData.map(function (el) {
          console.log(el);

          var returnObj = {}
          returnObj['gotchyDate'] = el.gotchyDate;
          returnObj['gotchyTime'] = el.gotchyTime;
          returnObj['location'] = el.location;
          returnObj['gotchyHobby'] = el.gotchyHobby;
          returnObj['gender'] = el.gender;
          returnObj['level'] = el.level;
          returnObj['mode'] = el.mode;

          return returnObj;
        }));
      })
      .catch((err) => {
        console.log("필터링 error");
        console.log(err);
      });
  };


  return (
    <>
      <div className="hobby-title">가치 조회</div>
      <div style={{ "text-align": "center" }}>
        <img src={Guide} alt="Guide" style={logoStyle} />
      </div>
      <MainDiv>
        <ListContainer>
          <div>날짜</div>
          <div>시간</div>
          <div>위치</div>
          <div>취미</div>
          <div>성별</div>
          <div>레벨</div>
          <div>개인 모집 여부</div>
        </ListContainer>
        <Hr className="list_container_line" />
        <SelectContainer>
          <input
            type="date"
            name="gotchyDate"
            onChange={onFilterChange}
            value={gotchyDate}
          />
          <input
            type="time"
            name="gotchyTime"
            onChange={onFilterChange}
            value={gotchyTime}
          />


          <select name="location" value={location} onChange={e => onFilterChange(e)} required>
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

          <select name="gotchyHobby" value={gotchyHobby} onChange={(e) => onFilterChange(e)}>
            <SelectDiv list={hobbyList} />
          </select>
          <select name="gender" value={gender} onChange={(e) => onFilterChange(e)}>
            <SelectDiv list={genderList} />
          </select>
          <select name="level" value={level} onChange={(e) => onFilterChange(e)}>
            <SelectDiv list={levelList} />
          </select>
          <select name="mode" value={mode} onChange={(e) => onFilterChange(e)}>
            <SelectDiv list={modeList} />
          </select>

          <button onClick={(e) => submitFilter(e)}>조회</button>
        </SelectContainer>
        <br />
        <div>
          <br />
          <hr className="list_container_title" />

          {gotchyList.map(meeting => (
            <>
              <ListContainer key={meeting.gotchyHobby}>
                <div>{meeting.gotchyDate}</div>
                <div>{meeting.gotchyTime}</div>
                <div>{meeting.location}</div>
                <div>{meeting.gotchyHobby}</div>
                <div>{meeting.gender}</div>
                <div>{meeting.level}</div>
                <div>{meeting.mode}</div>
                <div>
                  <TextSpan>{meeting.mode === 'YES' ? 'YES' : 'NO'}</TextSpan>
                  <SubmitButton href="/ApplyPage">신청</SubmitButton>
                </div>
              </ListContainer>
              <hr className="list_container_title" />
            </>
          ))}

        </div>
      </MainDiv>
    </>
  );
};

const Hr = styled.hr`
  background-color: #8f23c0;
  border: none;
  height: 2px;
`;

const TextSpan = styled.span`
  margin-right: 30px;
`;

const SubmitButton = styled(NavLink)`
  border: none;
  color: rgb(255, 255, 255);
  background-color: rgb(70, 0, 87);
  border-radius: 5px;
  padding: 2px 11px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background-color: rgb(70, 0, 87);
    color: #fff;
  }
`;



const ListContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 980px;
  justify-content: space-between;

  > div {
    width: 120px;
    font-size: 15px;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  /* margin-left: 5%; */
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin: 0;
  }

  .list_container_title {
    background-color: #8f23c0;
    border: none;
    height: 2px;
  }

  .list_container_line {
    background-color: #8f23c0;
    border: none;
    width: 990px;
    height: 3px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 25px;

  > select,
  > input {
    width: 120px;

    font-size: 12px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #a374db;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Inquiry;

