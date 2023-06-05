import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReservePage = () => {
  const today = new Date();
  const TODAY = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(today.getDate()).padStart(2, '0')}`;

  const hobbyList = [
    '축구',
    '농구',
    '족구',
    '탁구',
    '배드민턴',
    '테니스',
    '합주(밴드, 오케스트라)',
    '노래',
    '춤',
    '독서토론',
    '보드게임'
  ];
  const location = [
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
  const gender = ['남자', '여자'];
  const level = ['비기너', '아마추어', '프로'];

  const [data, setData] = useState({
    gotchyId: `${Math.floor(Math.random() * 100000) + 100000}`,
    location: '서울',
    gotchyHobby: '축구',
    gender: '남자',
    level: '비기너',
    mode: 'Yes',
    photoUrl: '',
    price: null,
    headcount: null,
    useTime: null,
    modifiedDate: TODAY,
    createdDate: TODAY,
    date: TODAY
  });

  //axios 
//   const postData = async (data) => {
//     try {
//       await axios.post('http://your_server_endpoint', data); 
//       alert('등록 되었습니다.');
//       window.location.href = '/guide';
//     } catch (err) {
//       console.error(err);
//       alert('등록에 실패했습니다.');
//     }
//   };


  // const requestInput = async (e) => {
  //   e.preventDefault();
  //
  //   axios.get("", {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     }
  //   })
  //     .then((resp) => {
  //
  //     })
  //     .catch((err) => {
  //
  //       console.log(err);
  //     });
  // }

  const onChangeData = ({ props, e }) => {
    setData({ ...data, [props]: e.target.value });
  };

  return (
    <>
      <MainDiv>
        <h1>가치 모집 등록</h1>
        <InputContainer>
          <label>취미</label>
          <select
            onChange={(e) => onChangeData({ props: 'gotchyHobby', e: e })}
          >
            {hobbyList.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <label>날짜</label>
          <input
            type={'date'}
            onChange={(e) => onChangeData({ props: 'date', e: e })}
            value={data.date}
          />
          <label>위치</label>
          <select onChange={(e) => onChangeData({ props: 'location', e: e })}>
            {location.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <label>인원 수</label>
          <input
            onChange={(e) => onChangeData({ props: 'headcount', e: e })}
            placeholder="인원 수를 입력해주세요."
            type="number"
            value={data.headcount}
          />
          <label>이용시간</label>
          <input
            onChange={(e) => onChangeData({ props: 'useTime', e: e })}
            placeholder="이용시간을 입력해주세요."
            type={'number'}
            value={data.useTime}
          />
          <label>성별</label>
          <select onChange={(e) => onChangeData({ props: 'gender', e: e })}>
            {gender.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <label>레밸</label>
          <select onChange={(e) => onChangeData({ props: 'level', e: e })}>
            {level.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <label>보증금</label>
          <input
            onChange={(e) => onChangeData({ props: 'price', e: e })}
            placeholder="보증금을 입력해주세요."
            type="number"
            value={data.price}
          />
        </InputContainer>
        <ButtonWrapper>
          <button
            onClick={() => {
              if (Object.values(data).includes(null))
                alert('내용을 모두 입력해주세요..');
              else {
                // api 요청.then (() => {
                alert('등록 되었습니다.');
                window.location.href = '/guide';
                //})
              }
            }}
          >
            등록하기
          </button>
        </ButtonWrapper>
      </MainDiv>
    </>
  );
};
export default ReservePage;

const InputContainer = styled.div`
  margin-top: 50px;
  /* width: 60%; */
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
    width: 450px;
    height: 7%;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    display: flex;
  }

  > select {
    border: 2px solid #888;
    width: 450px;
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
    margin-top: 50px;
    margin-bottom: 30px;
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
