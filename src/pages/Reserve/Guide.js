import styled from "styled-components";
import { useRef } from "react";

const Guide = () => {
  const agree = useRef();
  return (
    <>
      <MainDiv>
        <h1>위약 규정</h1>
        <hr />
        <Container>
          [일반]
          <br />
          -결제 후 30분 이내 취소 시 100% 환불 (하루 1회)
          <br />
          -7일 전 취소 시 100% 환불
          <br />
          -5일 전 취소 시 80% 환불
          <br />
          -3일 전 취소 시 50% 환불
          <br />
          -2일 전 ~ 대관 당일 환불 불가
          <br />
          <br />
          [특수]
          <br />
          천재지변
          <br />
          -당일 천재지변으로 인해 구장 이용이 불가한 경우 100% 환불
          <br />
          (적용기준: 호우경보,대설경보,태풍주의보,태풍경보)
          <br />
          <br />
          [우천]
          <br />
          -시간 당 5mm 이상 시 날짜 변경 가능
          <br />
          (기준: 당일 이용 2시간 전 기상청 날씨 해당 주소지 기준)
          <br />
          단순 변심에 의한 날짜 변경은 불가
        </Container>
        <label htmlFor={"guide"}>
          <input type="checkbox" id="guide" ref={agree} /> 위 내용을 읽었으며,
          이에 대해 동의합니다.
        </label>
        <span>
          <button
            onClick={() => {
              if (agree.current.checked) window.location.href = "/list";
              else alert("약관을 동의해주세요.");
            }}
          >
            동의
          </button>
        </span>
      </MainDiv>
    </>
  );
};
export default Guide;

const Container = styled.div`
  margin-top: 30px;
  width: 80%;
  border: 2px solid #8f23c0;
  border-radius: 15px;
  padding: 30px;
  font-size: 1.2vmax;
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
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
    width: 150px;
    height: 4px;
  }

  > label {
    width: 80%;
    margin-top: 30px;
  }
  > span {
    width: 80%;
    text-align: end;
    margin-top: 10px;
    > button {
      width: 80px;
      height: 35px;
      background-color: #8f23c0;
      border: none;
      outline: none;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
