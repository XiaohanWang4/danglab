import "./index.css";
import { Layout } from "antd";
import CustomHeader from "../Header";
import ContactInfo from "../ContactInfo";
const { Header, Footer, Content} = Layout;

const Research = () => {
    return (
        <Layout>
        <Header className="header">
          <CustomHeader/>
        </Header>
        <Content >
        </Content>
        <Footer style={{ width: "100%", position: "absolute",bottom: "0"}}>
          <ContactInfo/>
        </Footer>
      </Layout>
    )
}

export default Research;