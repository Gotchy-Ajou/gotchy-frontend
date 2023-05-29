import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import { Col, Row } from "reactstrap";

import { MainPage } from "./pages/MainPage";
import Notice from "./pages/Notice/Notice";
import FAQ from "./pages/FAQ/FAQ";
import Filter from "./pages/Filter";
import Reserve from "./components/Reserve";
import GuidePage from "./components/Guide";
import Inquiry from "./components/Inquiry";

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
    <div className="App">
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
              <Route path="/" element={<MainPage />} />
              <Route path="/Filter" element={<Filter />} />
              <Route path="/Notice" element={<Notice />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/list" element={<Inquiry />} />
              {/* <Route path="/members" component={Members} />
          <Route path="/cashes" component={Cashes} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;