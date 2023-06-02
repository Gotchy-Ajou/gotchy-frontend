import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId, setUserName, setUserOption } from '../../redux/action';
import { SlMenu, SlBell, SlEarphonesAlt, SlBubble, SlLogout } from "react-icons/sl";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const AdminSideNavigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user_id = useSelector((state => state.user_id))
    const user_option = useSelector((state => state.user_option))

    const logoutClickHandler = () => {
        dispatch(setUserId(""));
        dispatch(setUserName(""));
        dispatch(setUserOption(""));
        localStorage.clear()
        navigate('/');
    };
    

    const [collapsed, setCollapsed] = useState(false);
    // added styles 
    const styles = {
        sideBarHeight: {
            height: "200vh",
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
                <MenuItem icon={<SlBell />}>
                    공지사항 관리
                    <Link to="/AdminNotice" />
                </MenuItem>

                <MenuItem icon={<SlBubble />}>
                    FAQ 관리
                    <Link to="/AdminFAQ" />
                </MenuItem>

                <MenuItem icon={<SlEarphonesAlt />}>
                    문의하기 관리
                    <Link to="/AskManage" />
                </MenuItem>

                <MenuItem icon={<SlLogout />}>
                    로그아웃
                    <Link onClick={logoutClickHandler} />
                </MenuItem>
            </Menu>
        </ProSidebar>

    );
};
export default AdminSideNavigation;