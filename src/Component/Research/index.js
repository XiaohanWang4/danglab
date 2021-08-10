import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Research = () => {
    const listData = [{
        title: "1. Novel protein chemistry tools development",
        content: "a. Site-specific chemical protein cleavage <br/>" +
        "b. Site-specific protein conjugation <br/>" + 
        "c. Novel methodologies for chemical protein synthesis <br/>" +
        "d. protein enzyme profilling using phage display <br/>",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/research%20pic%201.png"
    },
    {
        title: "2.Novel protein therapeutics development",
        content: "a. Design and develop highly stable protein structures as protein scaffolds <br/>"+
        "b. Using small protein molecules (< 15 kDa) to develop novel therapeutic approaches for cancer treatment <br/>"+ 
        "c .Using chemical protein synthesis to prepare and modify natural or unnatural protein molecules to improve candidate protein pharmacological properties",
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
            <div className="mission">
                <h1>Mission: We employ advanced approaches to develop cutting-edge protein based technologies and protein therapeutics.  </h1>
            </div>
            <div className="">
                <h1></h1>
            </div>
            <div className="research-content">
            Fascinated by protein molecules, Dr. Dang has been focusing his researches on studying the structure, function and biological activities of protein molecules through chemical synthesis, computational design and biological display technologies. Chemical protein synthesis provides atomic control of protein structures and enables protein modifications in unprecedented ways. Computational protein design allows protein structure exploration beyond natural world. We walk at the frontier of protein synthesis and protein design to develop technologies and to advance protein therapeutics with the help of high throughput protein screening. 
            </div>
            <div className="list-title">
            <h1>Specific research topics are listed below: </h1>
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
                                <div className="list-content" dangerouslySetInnerHTML={{__html: item.content}}>

                                </div>

                            </div>                            
                        </List.Item>
                    )}
                />
            </div>
            <br/>
            <div className="footer">
            <h3>Dr. Dang is running a truly interdisciplinary research lab at the Westlake University, Hangzhou, China. We look for candidates with background in organic chemistry, chemical biology, molecular biology, biochemistry, structure biology, biophysics, cell biology. </h3>
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

