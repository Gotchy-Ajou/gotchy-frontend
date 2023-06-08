import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId, setUserName, setUserOption } from '../../redux/action';
import { SlMenu, SlUser, SlEmotsmile, SlBell, SlHeart, SlEarphonesAlt, SlBubble, SlLogout } from "react-icons/sl";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const UserSideNavigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user_id = useSelector((state => state.user_id))
    const user_option = useSelector((state => state.user_option))

    const logoutClickHandler = () => {
        dispatch(setUserId(""));
        dispatch(setUserName(""));
        dispatch(setUserOption(""));
        localStorage.clear();
        navigate('/LoginPage');
    };

    const [collapsed, setCollapsed] = useState(false);
    // added styles 
    const styles = {
        sideBarHeight: {
            height: "230vh",
            bottom: "0",
        },
        menuIcon: {
            float: "right",
            margin: "10px"
        },
    };
    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        console.log(user_option)
        console.log(localStorage.getItem('useroption') || "")
    }, []);

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
                        <Link to="/MyInfo" />
                    </MenuItem>
                    <MenuItem icon={<SlEmotsmile />}>
                        나의 취미
                        <Link to="/MyHobby" />
                    </MenuItem>
                </SubMenu>

                <MenuItem icon={<SlBell />}>
                    공지사항
                    <Link to="/Notice" />
                </MenuItem>

                <MenuItem icon={<SlBubble />}>
                    FAQ
                    <Link to="/FAQ" />
                </MenuItem>

                <MenuItem icon={<SlEarphonesAlt />}>
                    문의하기
                    <Link to="/AskPage" />
                </MenuItem>

                <MenuItem icon={<SlLogout />}>
                    로그아웃
                    <Link onClick={logoutClickHandler} />
                </MenuItem>
            </Menu>
        </ProSidebar>

    );
};
export default UserSideNavigation;