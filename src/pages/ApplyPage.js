import React, { useState } from 'react';
import './ApplyPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ApplyPage = () => {
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

  const handleDateChange = (date) => {
    setFilter({ ...filter, date: date.toISOString().split('T')[0] });
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
            <h2>가치 신청</h2>
            <p>날짜를 선택하시오</p>
            <DatePicker selected={new Date(filter.date)} onChange={handleDateChange} />
            <br />
            <p>Selected filter: {filter.date}</p>
            <button className="next-button" onClick={handleNextStep}>Next</button>
          </div>
        )}
        {step === 1 && (
          <TermsAndConditions filter={filter} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}
        {step === 2 && (
          <RefundPolicy filter={filter} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}
        {step === 3 && <PaymentInfo filter={filter} onReset={handleReset} />}
      </div>
    </div>
  );
};

const TermsAndConditions = ({ filter, onNextStep, onPreviousStep }) => {
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
      <h2>Terms and Conditions</h2>
      <p>Here are the terms and conditions. Please read and agree.</p>
      <p>Selected filter: {filter.date}</p>
      <button className="back-button" onClick={handlePrevious}>Back</button>
      <button className="agree-button" onClick={handleAgree}>I Agree</button>
      {agreed && <p>You have agreed to the terms and conditions.</p>}
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

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
      <h2>Refund Policy</h2>
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
      <p>Selected filter: {filter.date}</p>
      <div className="apply-button-groups">
        <button className="back-button" onClick={handlePrevious}>Back</button>
        <button className="agree-button" onClick={handleAgree}>I Agree</button>
        {agreed && <p>You have agreed to the refund policy.</p>}
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const PaymentInfo = ({ filter, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className='step'>
      <h2>Payment Information</h2>
      <p>Here is the payment information for the selected value.</p>
      <p>Selected filter: {filter.date}</p>
      <button className="complete-button" onClick={handleReset}>Complete Application</button>
    </div>
  );
};

export default ApplyPage;
