import { Layout, Carousel } from "antd";
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
                    {/* <div className="carousel-container" /> */}
                    <div>
                    <Carousel autoplay>
                        <div>
                            <div className="carousel-item carousel-item1"></div>
                        </div>
                        <div>
                            <div  className="carousel-item carousel-item2"></div>
                        </div> 
                        <div>
                            <div  className="carousel-item carousel-item3"></div>
                        </div> 
                        <div>
                            <div  className="carousel-item carousel-item4"></div>
                        </div> 
                        <div>
                            <div  className="carousel-item carousel-item5"></div>
                        </div>
                        <div>
                            <div  className="carousel-item carousel-item6"></div>
                        </div>
                        <div>
                            <div  className="carousel-item carousel-item7"></div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </Content>
            <div style={{position:'relative'}}>
            <Footer style={{ width: "100%",  }}>
                <ContactInfo />
            </Footer>
            </div>
        </Layout>
    )
}

export default Home;


