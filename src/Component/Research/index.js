import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Research = () => {
    const listData = [{
        title: "Mission: We employ advanced approaches to develop cutting-edge protein based technologies and protein therapeutics.   ",
        researcher: "Dr. Dang",
        content: "Fascinated by protein molecules, Dr. Dang has been focusing his researches on studying the structure, function and biological activities of protein molecules through chemical synthesis, computational design and biological display technologies. Chemical protein synthesis provides atomic control of protein structures and enables protein modifications in unprecedented ways. Computational protein design allows protein structure exploration beyond natural world. We walk at the frontier of protein synthesis and protein design to develop technologies and to advance protein therapeutics with the help of high throughput protein screening.Researches at Dang lab focus on:1. Novel protein technology development:a. Site-specific protein conjugation b. Site-specific chemical protein cleavage c. Novel methodologies for protein chemical synthesis 2. Novel protein probes/therapeutics development:a. Design and develop highly stable protein structuresb. Develop specific binders for various protein targets (ion channels, membrane receptors) as biophysical probes/therapeutic candidates using structure-based design and high throughput protein screening",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/research%20pic%201.png"
    },
    {
        title: "We employ advanced approaches to develop cutting-edge protein based technologies and protein therapeutics.  ",
        researcher: "Dr. Dang",
        content: "Fascinated by protein molecules, Dr. Dang has been focusing his researches on studying the structure, function and biological activities of protein molecules through chemical synthesis, computational design and biological display technologies. Chemical protein synthesis provides atomic control of protein structures and enables protein modifications in unprecedented ways. Computational protein design allows protein structure exploration beyond natural world. We walk at the frontier of protein synthesis and protein design to develop technologies and to advance protein therapeutics with the help of high throughput protein screening.Researches at Dang lab focus on:1. Novel protein technology development:a. Site-specific protein conjugation b. Site-specific chemical protein cleavage c. Novel methodologies for protein chemical synthesis 2. Novel protein probes/therapeutics development:a. Design and develop highly stable protein structuresb. Develop specific binders for various protein targets (ion channels, membrane receptors) as biophysical probes/therapeutic candidates using structure-based design and high throughput protein screening",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/research%20pic%202.png"
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
                                  width={555}
                                  alt="logo"
                                  src={item.image}
                                />
                                </div>
                                <br/>
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

