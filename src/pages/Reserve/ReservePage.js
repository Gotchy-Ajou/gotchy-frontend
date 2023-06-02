import styled from "styled-components";
import { useState, useEffect } from "react";
// import Dummy from "../../dummy.json";

const ReservePage = () => {
  const today = new Date();
  const TODAY = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  const hobbyList = [
    "축구",
    "농구",
    "족구",
    "탁구",
    "배드민턴",
    "테니스",
    "합주(밴드, 오케스트라)",
    "노래",
    "춤",
    "독서토론",
    "보드게임",
  ];
  const location = [
    "서울",
    "경기",
    "인천",
    "강원",
    "대전",
    "충남/세종",
    "충북",
    "대구",
    "경북",
    "부산",
    "울산",
    "경남",
    "광주",
    "전남",
    "전북",
    "제주",
  ];
  const gender = ["남자", "여자"];
  const level = ["비기너", "아마추어", "프로"];

  const [data, setData] = useState({
    gotchyId: `${Math.floor(Math.random() * 100000) + 100000}`,
    location: "서울",
    gotchyHobby: "축구",
    gender: "남자",
    level: "비기너",
    mode: "Yes",
    photoUrl: "",
    price: null,
    headcount: null,
    useTime: null,
    modifiedDate: TODAY,
    createdDate: TODAY,
    date: TODAY,
  });

  const onChangeData = ({ props, e }) => {
    setData({ ...data, [props]: e.target.value });
  };

  return (
    <>
      <MainDiv>
        <h1>가치 모집 등록</h1>
        <InputContainer>
          <select
            onChange={(e) => onChangeData({ props: "gotchyHobby", e: e })}
          >
            {hobbyList.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <input
            type={"date"}
            onChange={(e) => onChangeData({ props: "date", e: e })}
            value={data.date}
          />
          <select onChange={(e) => onChangeData({ props: "location", e: e })}>
            {location.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <input
            onChange={(e) => onChangeData({ props: "headcount", e: e })}
            placeholder="인원 수를 입력해주세요."
            type="number"
            value={data.headcount}
          />
          <input
            onChange={(e) => onChangeData({ props: "useTime", e: e })}
            placeholder="이용시간을 입력해주세요."
            type={"number"}
            value={data.useTime}
          />
          <select onChange={(e) => onChangeData({ props: "gender", e: e })}>
            {gender.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <select onChange={(e) => onChangeData({ props: "level", e: e })}>
            {level.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <input
            onChange={(e) => onChangeData({ props: "price", e: e })}
            placeholder="보증금을 입력해주세요."
            type="number"
            value={data.price}
          />
          <div>
            <button
              onClick={() => {
                if (Object.values(data).includes(null))
                  alert("내용을 모두 입력해주세요..");
                else {
                  // api 요청.then (() => {
                  alert("등록 되었습니다.");
                  window.location.href = "/guide";
                  //})
                }
              }}
            >
              등록하기
            </button>
          </div>
        </InputContainer>
      </MainDiv>
    </>
  );
};
export default ReservePage;

const InputContainer = styled.div`
  margin-top: 50px;
  width: 60%;
  height: 80%;
  border: 2px solid #8f23c0;
  border-radius: 15px;
  padding: 30px;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    > button {
      margin-top: 50px;
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
  }
  > input,
  > select {
    border: 2px solid #888;
    width: 400px;
    height: 7%;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 15px;
    display: flex;
  }
  > select {
    width: 414px;
  }
`;

const MainDiv = styled.div`
  height: 100vh;
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