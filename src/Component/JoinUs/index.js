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
                <h2>Email: dangbobo@westlake.edu.cn</h2>
            </div>
            <div className="desc-container">
            <h2>We have positions open for Postdocs, Ph.D. Students, research assistants with backgrounds in Molecular Biology, Organic Chemistry, Chemical Biology, Biochemistry, Structure Biology, Cell biology etc. We are an interdisciplinary research group, we welcome applicants from various other research backgrounds too. </h2>
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