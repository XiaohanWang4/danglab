import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Team = () => {
    const listData = [{
        name: "Bobo Dang",
        title: "Lab PI",
        description: "Description",
        image: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    },
    

];


    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="team-container">
            <div className="team-title">
                <p>Teams</p>
            </div>
            <div className="team-items">
                <List 
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    
                    renderItem={item => (
                        <List.Item
                            key={item.name}
                        >
                            <List.Item.Meta
                                title={item.name}
                                description={item.title}
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
                                    {item.description}
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

export default Team;

