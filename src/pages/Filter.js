import { useEffect, useState } from "react";
import Dummy from "./dummy.json";

function Filter() {
  const today = new Date();

  const [filter, setFilter] = useState({
    hobby: "any",
    location: "any",
    gender: "any",
    level: "any",
    recruit: "any",
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
        !(filter.recruit === "any" || e.recruit === filter.recruit)
      )
        return null;

      if (!(filter.hobby === "any" || e.hobby === filter.hobby)) return null;
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

  const onChangeFilter = ({ props, e }) => {
    setFilter({ ...filter, [props]: e.target.value });
  };

  const [hobby, setHobby] = useState("any");

  useEffect(() => {
    setData(ReplaceData());
  }, [filter]);

  return (
    <>
      <input
        type="date"
        onChange={(e) => onChangeFilter({ props: "date", e: e })}
        value={filter.date}
      />
      <br />
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
              props: "hobby",
              e: {
                target: {
                  value: "any",
                },
              },
            });
          else if (e.target.value === "체육")
            onChangeFilter({
              props: "hobby",
              e: {
                target: {
                  value: peKind[0],
                },
              },
            });
          else
            onChangeFilter({
              props: "hobby",
              e: {
                target: {
                  value: artKind[0],
                },
              },
            });
        }}
      >
        <option value={"any"}>취미</option>
        <option value={"체육"}>체육</option>
        <option value={"예술"}>예술</option>
      </select>
      {hobby !== "any" ? (
        <>
          <select onChange={(e) => onChangeFilter({ props: "hobby", e: e })}>
            {hobby === "체육"
              ? peKind.map((e) => <option value={e}>{e}</option>)
              : artKind.map((e) => <option value={e}>{e}</option>)}
          </select>
        </>
      ) : (
        <></>
      )}
      <select onChange={(e) => onChangeFilter({ props: "gender", e: e })}>
        <option value={"any"}>성별</option>
        <option value={"남자"}>남자</option>
        <option value={"여자"}>여자</option>
      </select>
      <select onChange={(e) => onChangeFilter({ props: "level", e: e })}>
        <option value={"any"}>레벨</option>
        <option value={"비기너"}>비기너</option>
        <option value={"아마추어"}>아마추어</option>
        <option value={"프로"}>프로</option>
      </select>
      <select onChange={(e) => onChangeFilter({ props: "recruit", e: e })}>
        <option value={"any"}>개인 모집 여부</option>
        <option value={"Yes"}>Yes</option>
        <option value={"No"}>No</option>
      </select>

      <br />
      <div>
        <br />
        <div style={{ display: "inline-flex" }}>
          <div style={{ width: "100px" }}>날짜 </div>
          <div style={{ width: "100px" }}>위치 </div>
          <div style={{ width: "100px" }}>취미 </div>
          <div style={{ width: "100px" }}>성별 </div>
          <div style={{ width: "100px" }}>레벨 </div>
          <div style={{ width: "120px" }}>개인 모집 여부 </div>
        </div>
        <br />
        {data.map((e) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ width: "100px" }}>{e?.date} </div>
              <div style={{ width: "100px" }}>{e?.location} </div>
              <div style={{ width: "100px" }}>{e?.hobby} </div>
              <div style={{ width: "100px" }}>{e?.gender} </div>
              <div style={{ width: "100px" }}>{e?.level} </div>
              <div style={{ width: "100px" }}>{e?.recruit} </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Filter;