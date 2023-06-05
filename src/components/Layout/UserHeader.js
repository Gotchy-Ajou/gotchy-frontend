import React from "react";
import GotchyImg from "./Gotchy.png"
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
const UserHeader = () => {
  return (
    <div>
      <Navbar style={{ "height": "100px" }} color="white" light expand="md">
        <NavbarBrand style={{ "font-size": "40px", "font-weight": "bold", "color": "#BD68B5" }} href="/">
          <img src={GotchyImg} /></NavbarBrand>
        <Nav className="collapse navbar-collapse justify-content-end" navbar style={{ "font-size": "20px" }}>
          <NavItem>
            <NavLink href="/Inquiry">가치 조회</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ApplyPage">가치 신청</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ReservePage">가치 모집 등록</NavLink>
          </NavItem>
        </Nav>
        {/* <NavbarText>
            <NavLink href="/InquiryPage">로그아웃</NavLink>
        </NavbarText> */}
      </Navbar>
    </div>
  );
};
export default UserHeader;