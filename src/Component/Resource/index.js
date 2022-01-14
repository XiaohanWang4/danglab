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
                    url:"https://www.genscript.com/tools/rare-codon-analysis",
                    url:"https://people.mbi.ucla.edu/sumchan/caltor.html"
                },
                {
                    title:"E. coli Cell Culture Concentration",
                    url:"https://www.agilent.com/store/biocalculators/calcODBacterial.jsp"
                },
                {
                    title:"Only for lab members",
                    url:"https://westlakeu-my.sharepoint.com/personal/baoxingyue_westlake_edu_cn/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fbaoxingyue%5Fwestlake%5Fedu%5Fcn%2FDocuments%2FDangLab&ct=1629895838116&or=OWA%2DNT&cid=61af8d02%2D573d%2D7925%2D7e26%2D0ac2c9dec1d0&originalPath=aHR0cHM6Ly93ZXN0bGFrZXUtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvYmFveGluZ3l1ZV93ZXN0bGFrZV9lZHVfY24vRXFYbWhkU3hJdVJBdDVNUmg1cVU3OEVCSWt0TVNfdlZEYWhRUUVyQ3ZkbEdaUT9ydGltZT1UbXZSNzhabjJVZw"
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