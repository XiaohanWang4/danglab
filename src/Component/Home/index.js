import { Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Home = () => {
    return (
        <Layout>
            <Header className="header">
                <CustomHeader />
            </Header>
            <Content>
                <div className="home-container">
                    <div className="slogan-container">
                        <h1>“Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.” – W. H. Murray</h1>
                    </div>
                    <div className="carousel-container"/>
                </div>
            </Content>
            <Footer style={{ width: "100%", position: "absolute", bottom: "0" }}>
                <ContactInfo />
            </Footer>
        </Layout>
    )
}

export default Home;


