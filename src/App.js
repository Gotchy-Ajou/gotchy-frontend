import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Row } from "reactstrap";

import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import "./assets/font.css"

import MyPage from './pages/MyPage/MyPage';

import { LoginPage } from './pages/SignUpAndLogin/LoginPage';
import { MainPage } from './pages/Main/MainPage';

// 회원용 페이지
import Notice from "./pages/Notice/Notice";
import FAQ from "./pages/FAQ/FAQ";
import Filter from "./pages/Filter";
import ApplyPage from './pages/ApplyPage';
import Reserve from './pages/Reserve/ReservePage';

// 관리자용 페이지
import AdminNotice from './pages/AdminNotice/AdminNotice';
import NoticeWrite from './pages/AdminNotice/NoticeWrite';
import NoticeUpdate from './pages/AdminNotice/NoticeUpdate';
import AdminFAQ from './pages/AdminFAQ/AdminFAQ';
import FAQUpdate from './pages/AdminFAQ/FAQUpdate';
import FAQWrite from './pages/AdminFAQ/FAQWrite';
import UserManage from './pages/AdminManage/UserManage';
import PartnerManage from './pages/AdminManage/PartnerManage';
import UserStatistic from './pages/AdminManage/UserStatistic';

// 임시, 삭제할 예정
import UserHeader from './components/Layout/UserHeader';
import UserSideNavigation from './components/Layout/UserSideNavigation';
import AdminHeader from './components/Layout/AdminHeader';
import AdminSideNavigation from './components/Layout/AdminSideNavigation';

const styles = {
  contentDiv: {
    display: "flex",
  },
  contentMargin: {
    marginTop: "30px",
    marginLeft: "10px",
    width: "100%",
  },
};

function App() {
  return (
    // 회원용 웹페이지
    // <div className="App">
    //   <Router>
    //     <Row>
    //       <Col>
    //         <UserHeader></UserHeader>
    //       </Col>
    //     </Row>
    //     <div style={styles.contentDiv}>
    //       <UserSideNavigation></UserSideNavigation>
    //       <div style={styles.contentMargin}>
    //         <Routes>
    //           <Route path="/" element={<MainPage />} />
    //           <Route path="/Filter" element={<Filter />} />
    //           <Route path="/ApplyPage" element={<ApplyPage />} />
    //           <Route path="/Reserve" element={<Reserve />} />
    //           <Route path="/Notice" element={<Notice />} />
    //           <Route path="/FAQ" element={<FAQ />} />

    //         </Routes>
    //       </div>
    //     </div>
    //   </Router >
    // </div >

    // 관리자용 웹페이지
    <div className="App">
      <Router>
        <Row>
          <Col>
            <AdminHeader></AdminHeader>
          </Col>
        </Row>
        <div style={styles.contentDiv}>
          <AdminSideNavigation></AdminSideNavigation>
          <div style={styles.contentMargin}>
            <Routes>
              <Route path="/" element={<UserManage />} />
              <Route path="/AdminNotice" element={<AdminNotice />} />
              <Route path="/ApplyPage" element={<ApplyPage />} />
              <Route path="/MyPage" element={<MyPage />} />
              <Route path="/NoticeWrite" element={<NoticeWrite />} />
              <Route path="/NoticeUpdate/:postId" element={<NoticeUpdate />} />
              <Route path="/AdminFAQ" element={<AdminFAQ />} />
              <Route path="/FAQWrite" element={<FAQWrite />} />
              <Route path="/FAQUpdate/:faqId" element={<FAQUpdate />} />
              <Route path="/UserManage" element={<UserManage />} />
              <Route path="/UserStatistic" element={<UserStatistic />} />
              <Route path="/PartnerManage" element={<PartnerManage />} />
            </Routes>
          </div>
        </div>
      </Router >
    </div >
  );
}
export default App;

//   const user_option = useSelector((state => state.user_option))
//   return (
//     <div className="App">
//       <HashRouter>
//         <Row>
//           <Col>
//             {
//               (!!user_option) ?
//                 <Header /> :
//                 null
//             }
//           </Col>
//         </Row>
//         <div style={styles.contentDiv}>
//           <Sidebar />
//           <div style={styles.contentMargin}>
//             <Routes>

//               {/* 로그인 페이지 */}
//               {
//                 (user_option == "1") ?
//                   <Route path="/" element={<MainPage />} /> :
//                   null
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/" element={<MainPage />} /> :
//                   null
//               }
//               {
//                 (user_option != "1" && user_option != "2") ?
//                   <Route path="/" element={<LoginPage />} /> :
//                   null
//               }
//               {/* 회원 페이지 */}
//               {
//                 (user_option == "1") ?
//                   <Route path="/" element={<MainPage />} /> :
//                   <Route path="/" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "1") ?
//                   <Route path="/Filter" element={<Filter />} /> :
//                   <Route path="/Filter" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "1") ?
//                   <Route path="/ApplyPage" element={<ApplyPage />} /> :
//                   <Route path="/ApplyPage" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "1") ?
//                   <Route path="/Reserve" element={<Reserve />} /> :
//                   <Route path="/Reserve" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "1") ?
//                   <Route path="/Notice" element={<Notice />} /> :
//                   <Route path="/Notice" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "1") ?
//                   <Route path="/FAQ" element={<FAQ />} /> :
//                   <Route path="/FAQ" element={<LoginPage />} />
//               }

//               {/* 관리자 페이지 */}
//               {
//                 (user_option == "1") ?
//                   <Route path="/" element={<UserManage />} /> :
//                   <Route path="/" element={<LoginPage />} />
//               }
//                {
  //                 (user_option == "2") ?
  //                   <Route path="/UserManage" element={<UserManage />} /> :
  //                   <Route path="/UserManage" element={<LoginPage />} />
  //               }
  //                {
  //                 (user_option == "2") ?
  //                   <Route path="/PartnerManage" element={<PartnerManage />} /> :
  //                   <Route path="/PartnerManage" element={<LoginPage />} />
  //               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/AdminNotice" element={<AdminNotice />} /> :
//                   <Route path="/AdminNotice" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/NoticeWrite" element={<NoticeWrite />} /> :
//                   <Route path="/NoticeWrite" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/NoticeUpdate" element={<NoticeUpdate />} /> :
//                   <Route path="/NoticeUpdate" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/AdminFAQ" element={<AdminFAQ />} /> :
//                   <Route path="/AdminFAQ" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/FAQWrite" element={<FAQWrite />} /> :
//                   <Route path="/FAQWrite" element={<LoginPage />} />
//               }
//               {
//                 (user_option == "2") ?
//                   <Route path="/FAQUpdate" element={<FAQUpdate />} /> :
//                   <Route path="/FAQUpdate" element={<LoginPage />} />
//               }
//             </Routes>
//           </div>
//         </div>

//       </HashRouter>
//     </div >
//   );
// }

// export default App;

