import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import { Col, Row } from "reactstrap";
import { MainPage } from "./pages/MainPage";
import Filter from "./pages/Filter";
import ApplyPage from "./pages/ApplyPage";


function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <BrowserRouter>
    <Row>
      <Col>
        <Header></Header>
      </Col>
    </Row>
    <div style={styles.contentDiv}>
      <SideNavigation></SideNavigation>
      <div style={styles.contentMargin}>
      <Routes>
        <Route path="/" element={MainPage} />
        <Route path="ApplyPage" element={<ApplyPage />} />
        <Route path="Filter" element={<Filter />} />
        {/* <Route path="/members" component={Members} />
        <Route path="/cashes" component={Cashes} /> */}
      </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}
export default App;
