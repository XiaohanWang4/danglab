import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Research = () => {
    const listData = [{
        title: "Research Name",
        researcher: "Researchers",
        content: "Content",
        image: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    },
];


    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="research-container">
            <div className="research-title">
                <p>Research</p>
            </div>
            <div className="research-items">
                <List 
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta
                                title={item.title}
                                description={item.researcher}
                            />
                            <div className="list-data">
                                <br/>
                                <div className="list-img">
                                <img
                                  width={272}
                                  alt="logo"
                                  src={item.image}
                                />
                                </div>
                                <div className="list-content">
                                    <p>
                                    {item.content}
                                    </p>
                                </div>

                            </div>                            
                        </List.Item>
                    )}
                />
            </div>
        </div>
</Content>
<Footer style={{ width: "100%", position: "relative",bottom: "0"}}>
  <ContactInfo/>
</Footer>
</Layout>
    )
}

export default Research;

