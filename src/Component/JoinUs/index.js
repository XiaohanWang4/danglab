import "./index.css";
import { Layout } from "antd";
import CustomHeader from "../Header";
import ContactInfo from "../ContactInfo";
const { Header, Footer, Content} = Layout;

const JoinUs = () => {
    return (
        <Layout>
        <Header className="header">
          <CustomHeader/>
        </Header>
        <Content >
        <div className="join-container">
            <div className="title-container">
                <h1>Join Us</h1>
            </div>
            <br/>
            <div className="email-container">
                <h2>电子邮箱: dangbobo@westlake.edu.cn</h2>
            </div>
            <div className="desc-container">
            <h2>实验室长期招聘分子生物学，化学方向的副研究员、博士后、研究助理，每年也通过生命科学院统一招生招收博士生，真诚期待您的加入！</h2>
            </div>
        </div>
        </Content>
        <Footer style={{ width: "100%", position: "absolute",bottom: "0"}}>
          <ContactInfo/>
        </Footer>
      </Layout>
    )
}


export default JoinUs;