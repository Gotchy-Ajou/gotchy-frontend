import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SelectDiv from './SelectDiv';
import Dummy from '../dummy.json';
import { NavLink } from "reactstrap";
import Guide from "./Guide.jpg"

const logoStyle = {
  width: 'auto',
  height: '360px',
  marginTop: '30px',
  marginBottom: '20px',
};
// const loadFilterData = async () => {
//   await axios.post('http://localhost:3000/api/v1/hobby/1')
//     .then(function (response) {
//       setFilter(response.data.responseData.map(function (el) {
//         console.log(el);

//         var returnObj = {}
//         returnObj['gotchyHobby'] = el.gotchyHobby;
//         returnObj['location'] = el.location;
//         returnObj['gender'] = el.gender;
//         returnObj['level'] = el.level;
//         returnObj['mode'] = el.mode;

//         return returnObj;
//       }));
//     }).catch(function (reason) {
//       console.log(reason);
//     });
// try {
//   const { data } = await axios.post('http://your_server_endpoint');
//   setFilter({
//     gotchyHobby: data.gotchyHobby,
//     location: data.location,
//     gender: data.gender,
//     level: data.level,
//     mode: data.mode
//   });
// } catch (err) {
//   console.error(err);
// }
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


// location
const locationList = async (e) => {
  // e.preventDefault();

  // axios.post("", {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   }
  // })
  //   .then((resp) => {

  //   })
  //   .catch((err) => {

  //     console.log(err);
  //   });
}
// gender
const genderList = async (e) => {
  // e.preventDefault();

  // axios.post("", {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   }
  // })
  //   .then((resp) => {

  //   })
  //   .catch((err) => {

  //     console.log(err);
  //   });
}
// level
const levelList = async (e) => {
  // e.preventDefault();

  // axios.post("", {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   }
  // })
  //   .then((resp) => {

  //   })
  //   .catch((err) => {

  //     console.log(err);
  //   });
}

//mode
const modeList = async (e) => {
  // e.preventDefault();

  // axios.post("", {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   }
  // })
  //   .then((resp) => {

  //   })
  //   .catch((err) => {

  //     console.log(err);
  //   });
}


const Inquiry = () => {
  const [gotchyList, setGotchyList] = useState([])
  const [filter, setFilter] = useState([])
  const loadFilterData = async () => {
    await axios.post('http://localhost:3000/api/v1/hobby/1')
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
  const today = new Date();
  const [meetings, setMeetings] = useState([]);
  const onChangeLocation = e => {
    // const selectedLocation = e.target.value;
    // // 사용자가 '모든 지역'을 선택하면 모든 데이터를 다시 불러옵니다.
    // if (selectedLocation === '모든 지역') {
    //   location(ReplaceData());
    // } else {
    //   // 그렇지 않으면 선택한 지역의 모임 데이터만 불러옵니다.
    //   axios.get(`http://localhost:8080/api/vi/gotchyfilter?location=${selectedLocation}`)
    //     .then(response => {
    //       location(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data: ', error);
    //     });
    // }
  };

  const onChangeGender = e => {
    // const selectedGender = e.target.value;

    // // 사용자가 '모든 성별'을 선택하면 모든 데이터를 다시 불러옵니다.
    // if (selectedGender === '모든 성별') {
    //   gender(ReplaceData());
    // } else {
    //   // 그렇지 않으면 선택한 성별의 모임 데이터만 불러옵니다.
    //   axios.get(`http://localhost:8080/api/v1/gotchyfilter?gender=${selectedGender}`)
    //     .then(response => {
    //       gender(response.data);
    //     })
    //     .catch(error => {
    //       console.error('데이터를 불러오는데 에러가 발생했습니다: ', error);
    //     });
    // }
  };




  // const [filter, setFilter] = useState({
  //   gotchyHobby: 'any',
  //   location: 'any',
  //   gender: 'any',
  //   level: 'any',
  //   mode: 'any',
  //   date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
  //     2,
  //     '0'
  //   )}-${String(today.getDate()).padStart(2, '0')}`,
  //   time: 'any',
  // });

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
  const recruit = ['개인 모집 여부', 'YES', 'NO'];

  const onChangeFilter = ({ props, e }) => {
    setFilter({ ...filter, [props]: e.target.value });
  };

  const [hobby, setHobby] = useState('any');

  useEffect(() => {
    setData(ReplaceData());
  }, [filter]);

  //axios
  const handleFilterApply = async () => {
    // try {
    //   const response = await axios.get('/api/path', { params: filter });
    //   setData(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
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
            onChange={(e) => onChangeFilter({ props: 'date', e: e })}
            value={filter.date}
          />
          <input
            type="time"
            onChange={(e) => onChangeFilter({ props: 'time', e: e })}
            value={filter.time}
          />
          <select onChange={onChangeLocation}>
            {location.map(e => (
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

        {/* <button onClick={handleFilterApply}>조회</button> */}

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
                <div>{meeting.hobby}</div>
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

