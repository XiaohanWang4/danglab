import { Carousel,Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const {Header, Content, Footer} = Layout;
const Home = () => {
    return (
        <Layout>
        <Header className="header">
  <CustomHeader/>
</Header>
<Content>
<div className="home-container">
            <div className="slogan-container">
                <h1>“Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.” – W. H. Murray</h1>
            </div>
            <img src="https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5%E7%B4%A0%E6%9D%90.png" alt="Lamp" width="32" height="32"></img>
            https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5%E7%B4%A0%E6%9D%902.png
            https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5%E7%B4%A0%E6%9D%903.png

            <div className="img3"/>
            <div className="img4"/> */
        </div>
</Content>
<Footer style={{ width: "100%", position: "absolute",bottom: "0"}}>
  <ContactInfo/>
</Footer>
</Layout>
    )
}

export default Home;


