import styled from "styled-components";
import React, { useState, useEffect } from "react";
import SelectDiv from "./SelectDiv";
import Dummy from "../dummy.json";

const Inquiry = () => {
  const today = new Date();

  const [filter, setFilter] = useState({
    gotchyHobby: "any",
    location: "any",
    gender: "any",
    level: "any",
    mode: "any",
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
  });

  const peKind = ["축구", "농구", "족구", "탁구", "배드민턴", "테니스"];
  const artKind = [
    "합주(밴드, 오케스트라)",
    "노래",
    "춤",
    "독서토론",
    "보드게임",
  ];

  const ReplaceData = () => {
    return Dummy.map((e) => {
      if (
        !(filter.date === e.date) ||
        !(filter.level === "any" || e.level === filter.level) ||
        !(filter.location === "any" || e.location === filter.location) ||
        !(filter.gender === "any" || e.gender === filter.gender) ||
        !(filter.mode === "any" || e.mode === filter.mode)
      )
        return null;
      if (
        !(filter.gotchyHobby === "any" || e.gotchyHobby === filter.gotchyHobby)
      )
        return null;
      return e;
    });
  };

  const [data, setData] = useState(ReplaceData());
  const location = [
    "모든 지역",
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

  const hobbyList = ["취미", "체육", "예술"];
  const gender = ["성별", "남자", "여자"];
  const level = ["레벨", "비기너", "아마추어", "프로"];
  const recruit = ["개인 모집 여부", "Yes", "No"];

  const onChangeFilter = ({ props, e }) => {
    setFilter({ ...filter, [props]: e.target.value });
  };

  const [hobby, setHobby] = useState("any");

  useEffect(() => {
    setData(ReplaceData());
  }, [filter]);

  return (
    <>
      <MainDiv>
        <h1>가치 조회</h1>
        <hr />
        <SelectContainer>
          <input
            type="date"
            onChange={(e) => onChangeFilter({ props: "date", e: e })}
            value={filter.date}
          />
          <select onChange={(e) => onChangeFilter({ props: "location", e: e })}>
            {location.map((e) => (
              <option value={e === "모든 지역" ? "any" : e}>{e}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setHobby(e.target.value);
              if (e.target.value === "any")
                onChangeFilter({
                  props: "gotchyHobby",
                  e: {
                    target: {
                      value: "any",
                    },
                  },
                });
              else if (e.target.value === "체육")
                onChangeFilter({
                  props: "gotchyHobby",
                  e: {
                    target: {
                      value: peKind[0],
                    },
                  },
                });
              else
                onChangeFilter({
                  props: "gotchyHobby",
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
          {hobby !== "any" ? (
            <>
              <select
                onChange={(e) => onChangeFilter({ props: "gotchyHobby", e: e })}
              >
                {hobby === "체육"
                  ? peKind.map((e) => <option value={e}>{e}</option>)
                  : artKind.map((e) => <option value={e}>{e}</option>)}
              </select>
            </>
          ) : (
            <></>
          )}
          <select onChange={(e) => onChangeFilter({ props: "gender", e: e })}>
            <SelectDiv list={gender} />
          </select>
          <select onChange={(e) => onChangeFilter({ props: "level", e: e })}>
            <SelectDiv list={level} />
          </select>
          <select onChange={(e) => onChangeFilter({ props: "mode", e: e })}>
            <SelectDiv list={recruit} />
          </select>
        </SelectContainer>
        <br />
        <div>
          <br />
          <ListContainer>
            <div>날짜 </div>
            <div>위치 </div>
            <div>취미 </div>
            <div>성별 </div>
            <div>레벨 </div>
            <div>개인 보집 여부 </div>
          </ListContainer>
          <Hr />
          <DataListContainer>
            {data.map((e) => {
              return (
                <>
                  {e ? (
                    <>
                      <div>
                        <div>{e?.date} </div>
                        <div>{e?.location} </div>
                        <div>{e?.gotchyHobby} </div>
                        <div>{e?.gender} </div>
                        <div>{e?.level} </div>
                        <div>{e?.mode} </div>
                        <button>신청</button>
                      </div>
                      <Hr />
                    </>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </DataListContainer>
          <div>
            <button onClick={() => (window.location.href = "/reserve")}>
              모집 의뢰 등록
            </button>
          </div>
        </div>
      </MainDiv>
    </>
  );
};
export default Inquiry;

const Hr = styled.hr`
  background-color: #8f23c0;
  border: none;
  height: 2px;
`;

const DataListContainer = styled.div`
  ~ div {
    margin-top: 30px;
    text-align: end;
    button {
      width: 150px;
      height: 50px;
      border-radius: 5px;
      border: none;
      background-color: #8f23c0;
      color: #fff;
      font-size: 16px;
    }
  }
  > div {
    display: flex;
    position: relative;
    > div {
      width: 120px;
      font-size: 16px;
      padding: 10px 0;
      cursor: pointer;
    }
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    padding: 5px 10px;
    background-color: #8f23c0;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const ListContainer = styled.div`
  display: inline-flex;
  margin-bottom: 20px;
  > div {
    width: 120px;
    font-size: 16px;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  margin-left: 5%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin: 0;
  }
  > hr {
    background-color: #8f23c0;
    border: none;
    width: 200px;
    height: 4px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  > select,
  > input {
    font-size: 12px;
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: #8f23c0;
    color: #fff;
    border-radius: 10px;
  }
`;
