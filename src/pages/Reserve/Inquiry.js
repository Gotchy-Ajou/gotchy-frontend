import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "reactstrap";
import Guide from "./Guide.jpg"

const logoStyle = {
  width: 'auto',
  height: '360px',
  marginTop: '30px',
  marginBottom: '20px',
};

const Inquiry = () => {
  const navigate = useNavigate();
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
    '제주',
  ];
  const hobbyList = ['축구', '농구', '야구', '족구', '탁구', '배드민턴', '테니스', '합주', '노래', '춤', '독서토론', '보드게임'];
  const genderList = ['남자', '여자'];
  const levelList = ['비기너', '아마추어', '프로'];
  const modeList = ['YES', 'NO'];

  const today = new Date();
  const [gotchyList, setGotchyList] = useState([
    {
      gotchyId: 1,
      gotchyDate: '2023-06-08',
      gotchyTime: '10:00',
      location: '수원 아주대',
      gotchyHobby: '축구',
      gender: '남자',
      level: '프로',
      mode: 'YES'
    },
    {
      gotchyId: 2,
      gotchyDate: '2023-06-08',
      gotchyTime: '10:00',
      location: '수원 아주대',
      gotchyHobby: '축구',
      gender: '남자',
      level: '프로',
      mode: 'YES'
    }
  ])

  // 전체 데이터 로드
  const loadFilterData = async () => {
    await axios.get('http://localhost:3000/api/v1/gotchy')
      .then(function (response) {
        setGotchyList(response.data.responseData.map(function (el) {
          console.log(el);

          var returnObj = {}
          returnObj['gotchyId'] = el.gotchyId;
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
    gotchyDate: null,
    gotchyTime: null,
    location: null,
    gotchyHobby: null,
    gender: null,
    level: null,
    mode: null
  });
  const { gotchyDate, gotchyTime, location, gotchyHobby, gender, level, mode } = filter;

  const onFilterChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // 필터링
  function submitFilter() {
    console.log(filter);
    axios.post("http://localhost:3000/api/v1/gotchyfilter", {
      'gotchyDate': filter.gotchyDate,
      'gotchyTime': filter.gotchyTime,
      'location': filter.location,
      'gotchyHobby': filter.gotchyHobby,
      'gender': filter.gender,
      'level': filter.level,
      'mode': filter.mode
    })
      .then((response) => {
        console.log("필터링 success");
        console.log(response.data);

        setGotchyList(response.data.responseData.map(function (el) {
          console.log(el);

          var returnObj = {}
          returnObj['gotchyId'] = el.gotchyId;
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

  function submitApply(e, meeting) {
    console.log(meeting);
    axios.post("http://localhost:3000/api/v1/users/apply-gotchy", {
      'usersId': 1,
      'gotchyId': meeting.gotchyId
    })
      .then((response) => {
        console.log("success");
        console.log(response.data);
        navigate("/ApplyPage"); // 신청 약관 페이지로 이동
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

  const navigateToApplyPage = () => {
    navigate("/ApplyPage");
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
          <div></div>
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

          <select name="gotchyHobby" value={gotchyHobby} onChange={(e) => onFilterChange(e)} required>
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

          <select name="gender" value={gender} onChange={(e) => onFilterChange(e)}>
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

          <select name="level" value={level} onChange={(e) => onFilterChange(e)}>
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

          <select name="mode" value={mode} onChange={(e) => onFilterChange(e)}>
            <option value="" selected>개인모집</option>
            {modeList.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>

          <button style={{ backgroundColor: '#12B560', color: '#fff', border: 'none', borderRadius: '5px', padding: '4px', width: '55px' }}
            onClick={() => submitFilter()}>조회</button>
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
                  <button style={{ backgroundColor: 'rgb(70, 0, 87)', color: '#fff', border: 'none', borderRadius: '5px' }}
                    onClick={(e, meeting) => {
                      submitApply(e, meeting);
                      // navigateToApplyPage();
                    }}
                  >신청</button>
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
margin-left: 45px;
  display: flex;
  margin-top: 20px;
  width: 1060px;
  justify-content: space-between;
  text-align: center;

  > div {
    width: 140px;
    font-size: 15px;
    display: flex;
    font-weight: bold;
    text-align: center;
  }
`;

const MainDiv = styled.div`
  width: 100%;
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
    width: 1060px;
    height: 3px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 1020px;
  justify-content: flex-start;

> input,
> select {
  width: 110px;
  font-size: 15px;
  display: flex;
  font-weight: bold;
  // justify-content: flex-start;
  margin-right: 22px;
  border: none;
  outline: none;
  background-color: #a374db;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  padding: 10px;
}
`;

export default Inquiry;