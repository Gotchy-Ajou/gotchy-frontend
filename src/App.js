import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import { Col, Row } from "reactstrap";

import { MainPage } from "./pages/MainPage";
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
        <Routes>
          <Route path="/MyInformationPage" exact element={MainPage} />
          {/* <Route path="/members" component={Members} />
          <Route path="/cashes" component={Cashes} /> */}
        </Routes>
        <div style={styles.contentMargin}>
          <h1 style={{ padding: "20%" }}>This is Content Area</h1>
        </div>
        </div>
        </BrowserRouter>
    </div>
  );
}
export default App;
