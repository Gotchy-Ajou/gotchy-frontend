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

const CommonHeader = () => {
  return (
    <div>
      <Navbar style={{ "height": "100px" }} color="white" light expand="md">
        <NavbarBrand style={{ "font-size": "40px", "font-weight": "bold", "color": "#BD68B5" }} href="/">
          <img src={GotchyImg} /></NavbarBrand>
        <Nav className="collapse navbar-collapse justify-content-end" navbar style={{ "font-size": "20px" }}>
          <NavItem>
            <NavLink href="/LoginPage">로그인</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/PartnerGuidePage">제휴안내</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default CommonHeader;