import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SelectDiv from './SelectDiv';
import Dummy from '../dummy.json';
import {

  NavLink,
} from "reactstrap";
import UserManage from '../AdminManage/UserManage';


// const loadFilterData = async () => {
//   try {
//     const { data } = await axios.post('http://your_server_endpoint');  
//     setFilter({
//       gotchyHobby: data.gotchyHobby,
//       location: data.location,
//       gender: data.gender,
//       level: data.level,
//       mode: data.mode
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// useEffect(() => {
//   loadFilterData();
// }, []);

// const updateFilterData = async (field, value) => {
//   try {
//     const { data } = await axios.post('http://your_server_endpoint', { 
//       [field]: value
//     });
//     setFilter(prevFilter => ({
//       ...prevFilter,
//       [field]: data[field]
//     }));
//   } catch (err) {
//     console.error(err);
//   }
// };

// const onChangeFilter = ({ props, e }) => {
//   const value = e.target.value;
//   updateFilterData(props, value);
// };




const Inquiry = () => {
  const today = new Date();


  const [filter, setFilter] = useState({
    gotchyHobby: 'any',
    location: 'any',
    gender: 'any',
    level: 'any',
    mode: 'any',
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(today.getDate()).padStart(2, '0')}`,
    time: 'any',
  });

  const peKind = ['축구', '농구', '족구', '탁구', '배드민턴', '테니스'];
  const artKind = ['합주(밴드, 오케스트라)', '노래', '춤', '독서토론', '보드게임'];

  const ReplaceData = () => {
    return Dummy.map((e) => {
      if (
        !(filter.date === e.date) ||
        !(filter.level === 'any' || e.level === filter.level) ||
        !(filter.location === 'any' || e.location === filter.location) ||
        !(filter.gender === 'any' || e.gender === filter.gender) ||
        !(filter.mode === 'any' || e.mode === filter.mode)
      )
        return null;
      if (
        !(filter.gotchyHobby === 'any' || e.gotchyHobby === filter.gotchyHobby)
      )
        return null;
      return e;
    });
  };

  const [data, setData] = useState(ReplaceData());
  const location = [
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

  const hobbyList = ['취미', '체육', '예술'];
  const gender = ['성별', '남자', '여자'];
  const level = ['레벨', '비기너', '아마추어', '프로'];
  const recruit = ['개인 모집 여부', 'Yes', 'No'];

  const onChangeFilter = ({ props, e }) => {
    setFilter({ ...filter, [props]: e.target.value });
  };

  const [hobby, setHobby] = useState('any');

  useEffect(() => {
    setData(ReplaceData());
  }, [filter]);

  return (
    <>
      <MainDiv>
        <h1>가치 조회</h1>
        <hr className="list_container_title" />
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
            onChange={(e) => onChangeFilter({ props: 'date', e: e })}
            value={filter.date}
          />
          <input
            type="time"
            onChange={(e) => onChangeFilter({ props: 'time', e: e })}
            value={filter.time}
          />
          <select onChange={(e) => onChangeFilter({ props: 'location', e: e })}>
            {location.map((e) => (
              <option value={e === '모든 지역' ? 'any' : e}>{e}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setHobby(e.target.value);
              if (e.target.value === 'any')
                onChangeFilter({
                  props: 'gotchyHobby',
                  e: {
                    target: {
                      value: 'any',
                    },
                  },
                });
              else if (e.target.value === '체육')
                onChangeFilter({
                  props: 'gotchyHobby',
                  e: {
                    target: {
                      value: peKind[0],
                    },
                  },
                });
              else
                onChangeFilter({
                  props: 'gotchyHobby',
                  e: {
                    target: {
                      value: artKind[0],
                    },
                  },
                });
            }}
          >
            <SelectDiv list={hobbyList} />
          </select>
          {hobby !== 'any' ? (
            <>
              <select
                onChange={(e) =>
                  onChangeFilter({ props: 'gotchyHobby', e: e })
                }
              >
                {hobby === '체육'
                  ? peKind.map((e) => <option value={e}>{e}</option>)
                  : artKind.map((e) => <option value={e}>{e}</option>)}
              </select>
            </>
          ) : (
            <></>
          )}
          <select onChange={(e) => onChangeFilter({ props: 'gender', e: e })}>
            <SelectDiv list={gender} />
          </select>
          <select onChange={(e) => onChangeFilter({ props: 'level', e: e })}>
            <SelectDiv list={level} />
          </select>
          <select onChange={(e) => onChangeFilter({ props: 'mode', e: e })}>
            <SelectDiv list={recruit} />
          </select>
        </SelectContainer>
        <br />
        <div>
          <br />


          <hr className="list_container_title" />
          <ListContainer>
            <div>2023-05-29</div>
            <div>12:00</div>
            <div>서울</div>
            <div>축구</div>
            <div>여자</div>
            <div>비기너</div>
            <div>
              <TextSpan>No</TextSpan>
              <SubmitButton href="/ApplyPage">신청</SubmitButton>
            </div>
          </ListContainer>
          <hr className="list_container_title" />
          <ListContainer>
            <div>2023-05-29</div>
            <div>12:00</div>
            <div>서울</div>
            <div>농구</div>
            <div>남자</div>
            <div>아마추어</div>
            <div>
              <TextSpan>Yes</TextSpan>
              <SubmitButton href="/ApplyPage">신청</SubmitButton>
            </div>
          </ListContainer>
          <hr className="list_container_title" />
          <ListContainer>
            <div>2023-05-29</div>
            <div>12:00</div>
            <div>인천</div>
            <div>밴드</div>
            <div>여자</div>
            <div>프로</div>
            <div>
              <TextSpan>No</TextSpan>
              <SubmitButton href="/ApplyPage">신청</SubmitButton>
            </div>
          </ListContainer>
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
  padding-top: 100px;
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

