import React, { useState } from 'react';
import './ApplyPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// const API_URL = 'http://localhost:5000/api';

const ApplyPage = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [refundPolicyAgreed, setRefundPolicyAgreed] = useState(false);
  const today = new Date();
  const [step, setStep] = useState(0); // 단계 상태
  const [filter, setFilter] = useState({
    hobby: 'any',
    location: 'any',
    gender: 'any',
    level: 'any',
    recruit: 'any',
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
  };

  const handleDateChange = async (date) => {
    const selectedDate = date.toISOString().split('T')[0];
    setFilter({ ...filter, date: selectedDate });

    // try {
    //   const response = await axios.get(`${API_URL}/getDateInfo`, { params: { date: selectedDate } });
    //   console.log(response.data); // Log the response data
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleCompleteApplication = async () => {
    // try {
    //   const response = await axios.post(`${API_URL}/completeApplication`, {
    //     termsAgreed,
    //     refundPolicyAgreed,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleSubmit = () => {
    // 필터 적용 후 처리 로직
    console.log(filter);
  };

  return (
    <div className='apply-page'>
      <div className='step-container'>
        {step === 0 && (
          <div className='step'>
            <h2 className="notice-write-title">가치 신청</h2>
            {/*<p>날짜를 선택하시오</p>
            <DatePicker selected={new Date(filter.date)} onChange={handleDateChange} />
            <br />*/}
            {/* <p>선택하신 가치의 날짜: {filter.date}</p> */}
            <p>가치 신청을 원하신다면 다음 버튼을 눌러주세요:D</p>
            <button className="next-button" onClick={handleNextStep}>다음</button>
          </div>
        )}
        {/* {step === 1 && (
          <TermsAndConditions agreed={termsAgreed} onAgree={() => setTermsAgreed(true)} filter={filter} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )} */}
        {step === 1 && (
          <RefundPolicy agreed={refundPolicyAgreed} onAgree={() => setRefundPolicyAgreed(true)} filter={filter} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}
        {step === 2 && (
          <PaymentInfo
            filter={filter}
            onReset={handleReset}
            onComplete={handleCompleteApplication}
          />)}
      </div>
    </div>
  );
};

// const TermsAndConditions = ({ filter, onNextStep, onPreviousStep }) => {
//   const [agreed, setAgreed] = useState(false);

//   const handleAgree = () => {
//     setAgreed(true);
//   };

//   const handleNext = () => {
//     onNextStep();
//   };

//   const handlePrevious = () => {
//     onPreviousStep();
//   };

//   return (
//     <div className='step'>
//       <h2 className="notice-write-title">가치 세부사항</h2>
//       <p>선택하신 가치의 세부사항입니다. </p>
//       <p>{filter.date} 12 : 00 서울 축구 여자 비기너</p>
//       <button className="back-button" onClick={handlePrevious}>뒤로</button>
//       <button className="agree-button" onClick={handleAgree}>동의</button>
//       {agreed && <p>상기 내용에 전부 동의하셨습니다.</p>}
//       <button className="next-button" onClick={handleNext}>다음</button>
//     </div>
//   );
// };

const RefundPolicy = ({ filter, onNextStep, onPreviousStep }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleNext = () => {
    onNextStep();
  };

  const handlePrevious = () => {
    onPreviousStep();
  };

  return (
    <div className='step'>
      <h2 className="notice-write-title">환불 정책</h2>
      <p>결제 후 30분 이내 취소 시 100% 환불 (하루 1회)</p>
      <p>7일 전 취소 시 100% 환불</p>
      <p>5일 전 취소 시 80% 환불</p>
      <p>3일 전 취소 시 50% 환불</p>
      <p>2일 전 ~ 대관 당일 환불 불가</p>
      <p></p>
      <p>당일 천재지변으로 인해 구장 이용이 불가한 경우 100% 환불</p>
      <p>(적용기준: 호우경보,대설경보,태풍주의보,태풍경보)</p>
      <p>시간 당 5mm 이상 시 날짜 변경 가능</p>
      <p>(기준: 당일 이용 2시간 전 기상청 날씨 해당 주소지 기준)</p>
      <div className="apply-button-groups">
        <button className="back-button" onClick={handlePrevious}>뒤로</button>
        <button className="agree-button" onClick={handleAgree}>동의</button>
        {agreed && <p>상기 내용에 전부 동의하셨습니다.</p>}
        <button className="next-button" onClick={() => {alert("동의를 눌러주세요!")}}>다음</button>
      </div>
    </div>
  );
};

const PaymentInfo = ({ filter, onReset, onComplete }) => {
  const navigate = useNavigate();
  const navigateToMyApply = () => {
    alert("가치 신청이 완료되었습니다!");
    navigate("/MyApply");
  };
  const handleReset = () => {
    onReset();
  };

  return (
    <div className='step'>
      <h2 className="notice-write-title">지불 방법 안내</h2>




      <div className='payment-info'>

        <h4 style={{ margin: "40px 0 20px", fontWeight: "bold", color: "#720091" }}>1. 신용카드 / 체크카드 결제</h4>
        <p>웹사이트를 통해 신용카드 또는 체크카드로 바로 결제하실 수 있습니다. 모든 주요 신용카드(Visa, Mastercard, American Express 등)를 통한 결제가 가능합니다.</p>

        <h4 style={{ margin: "40px 0 20px", fontWeight: "bold", color: "#720091" }}>2. 계좌이체</h4>
        <p>아래의 은행 계좌로 직접 이체하실 수 있습니다. 입금시 참고사항에 주문번호를 꼭 입력해 주세요.</p>
        <div>
          <p>은행명: 국민은행</p>
          <p>계좌번호: 123-456-78900</p>
          <p>예금주: 가치</p>
        </div>

        <h4 style={{ margin: "40px 0 20px", fontWeight: "bold", color: "#720091" }}>3. 페이팔 결제</h4>
        <p>페이팔 계정을 통해 결제하실 수 있습니다. 체크아웃 과정에서 페이팔을 선택하신 후, 페이팔 로그인을 하여 결제를 진행하시면 됩니다.</p>

        <h4 style={{ margin: "40px 0 20px", fontWeight: "bold", color: "#720091" }}>4. 모바일 결제</h4>
        <p>애플 페이, 구글 페이 등의 모바일 결제도 가능합니다. 결제 과정에서 해당 옵션을 선택하신 후, 요구되는 정보를 입력하시면 됩니다.</p>
      </div>

      <button className="complete-button" onClick={() => navigateToMyApply()}>신청 완료</button>
    </div >
  );
};


export default ApplyPage;
