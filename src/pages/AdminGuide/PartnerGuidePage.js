import React from "react";
import Guide from "./Guide.jpg"
import "./Guide.css"
import { FiPhoneCall } from "react-icons/fi";

const logoStyle = {
  width: 'auto', 
  height: '440px', 
  marginTop: '30px',
  marginBottom: '20px'
};

function PartnerGuidePage() {
    return (
      <div className="guide-parent">
        <h2 className="guide-title">구장주님 환영합니다!</h2>
        <div className="guide-context">
          가치와 같이 할 수 있는 다양한 제안을 기다립니다<br></br>
          <span className="guide-gotchy">가치</span>에 궁금한 점이 있다면 아래 연락처로 연락주세요. 구장주님의 비즈니스를 함께 해결하겠습니다:D
          </div>
        <div className="guide-tel-box"><FiPhoneCall />&nbsp;&nbsp;&nbsp;070-1973-0412</div>
        <img src={Guide} alt="Guide" style={logoStyle} />
      </div>
    );
  };
  export default PartnerGuidePage;