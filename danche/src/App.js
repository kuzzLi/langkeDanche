import "antd/dist/reset.css";
import { Row, Col } from "antd";
import Left from "./components/Navleft";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './style/common.less'
function App() {
  return (
    <div>
      <Row className="container">
        <Col span={4} className='nav-left'>
          <Left></Left>
        </Col>
        <Col span={20} className='main'>
          <Header></Header>
          <Row className="content">
            content
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
