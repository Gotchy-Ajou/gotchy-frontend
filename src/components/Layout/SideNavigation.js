import { useState } from "react";
import { Link } from 'react-router-dom';
import { SlMenu, SlUser, SlEmotsmile, SlBell, SlHeart, SlEarphonesAlt, SlBubble, SlLogout } from "react-icons/sl";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";
const SideNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);
    // added styles 
    const styles = {
        sideBarHeight: {
            height: "100vh",
            "background-color": "red"
        },
        menuIcon: {
            float: "right",
            margin: "10px"
        },
    };
    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };
    return (
        <ProSidebar style={styles.sideBarHeight} collapsed={!collapsed}>
            <SidebarHeader>
                <div style={styles.menuIcon} onClick={onClickMenuIcon}>
                    <SlMenu />
                </div>
            </SidebarHeader>
            <Menu iconShape="square">
                <SubMenu title="마이 페이지" icon={<SlHeart />}>
                    <MenuItem icon={<SlUser />}>
                        나의 정보
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<SlEmotsmile />}>
                        나의 레벨
                        <Link to="/MyLevelPage" />
                    </MenuItem>
                </SubMenu>

                <MenuItem icon={<SlBell />}>
                    공지사항
                    <Link to="/NoticePage" />
                </MenuItem>

                <MenuItem icon={<SlBubble />}>
                    FAQ
                    <Link to="/FaqPage" />
                </MenuItem>

                <MenuItem icon={<SlEarphonesAlt />}>
                    문의하기
                    <Link to="/AskPage" />
                </MenuItem>

                <MenuItem icon={<SlLogout />}>
                    로그아웃
                    <Link to="/LogoutPage" />
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
};
export default SideNavigation;