import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const {Header, Content, Footer} = Layout;
const Resource = () => {
    const data = [
            {
            title: "Protein Properties",
            url:"https://web.expasy.org/protparam/",
            },
            {
                title: "Compute_pi",
                url:"https://web.expasy.org/compute_pi/",
            },
            {
                title: "Gene Translate",
                url:"https://web.expasy.org/translate/"
            },
            {
                title: "Make Tray",
                url:"https://www.hamptonresearch.com/make-tray.php",
                },
                {
                    title: "Primer tm-calculator",
                    url:"https://www.thermofisher.com/hk/en/home/brands/thermo-scientific/molecular-biology/molecular-biology-learning-center/molecular-biology-resource-library/thermo-scientific-web-tools/tm-calculator.html",

                },
                {
                    title:"Reverse-complement",
                    url:"http://reverse-complement.com"
                },
                {
                    title:"Codon-frequency-table",
                    url:"https://www.genscript.com/tools/codon-frequency-table"
                },
                {
                    title:"Rare codon analysis",
                    url:"https://www.genscript.com/tools/rare-codon-analysis"
                },
                {
                    title:"E. coli Cell Culture Concentration",
                    url:"https://www.agilent.com/store/biocalculators/calcODBacterial.jsp"
                },
    ]

    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="resource-container">
            <br/>
            <div className="resource-items">
                <List 
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta className="resource-item-title"
                                title={item.title}
                            />
                            <a href={item.url}>{item.url}</a>   
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



export default Resource;