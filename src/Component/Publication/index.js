import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Publication = () => {
    const listData = [{
        title: "Publication Title",
        description: "Researchers",
        content: "Content"
    },
    {
        title: "Engineered trimeric ACE2 binds viral spike protein and locks it in “Three-up” conformation to potently inhibit SARS-CoV-2 infection",
        description: "L. Guo#, W. Bi#, X. Wang#, W. Xu#, R. Yan#, Y. Zhang#, K. Zhao, Y. Li, M. Zhang, X. Cai, S. Jiang, Y. Xie, Q. Zhou*, L. Lu*, B. Dang*",
        content: "Coronavirus infection can cause shedding of ACE2 resulting in a decreased level of ACE2 expression. "+
        "This phenomenon is closely related to acute lung injury, and replenishing soluble ACE2 could alleviate acute respiratory distress syndrome (ARDS)."
        +" It has been shown that recombinant soluble ACE2 could inhibit SARS-CoVs infection in cells and organoids.One clinical trial was also registered to use recombinant ACE2 to treat COVID-19. "
        +"However, recombinant soluble ACE2 inhibits viral infection at relatively high concentratios, therefore, it may not be an optimal inhibitor. Since spike proteins of SARS-CoVs function as trimers, "
        +"we reasoned that an engineered trimeric ACE2 protein could potentially bind up to three receptor binding domains (RBD) on the spike protein, which would dramatically increase binding affinity "
        +"and thus potently inhibit SARS-CoVs."
    },
    {
        title:"SNAC-tag for Sequence-specific Chemical Protein Cleavage",
        description: "B. Dang*, M. Mravic, H, Hu, N. Scmidt, B. Mensa, W. F. DeGrado*",
        content: "Site-specific protein cleavage is essential for many protein-production protocols and typically requires proteases. We report the development of a chemical protein-cleavage method that is achieved through the use of a sequence-specific nickel-assisted cleavage (SNAC)-tag. We demonstrate that the SNAC-tag can be inserted before both water-soluble and membrane proteins to achieve fusion protein cleavage under biocompatible conditions with efficiency comparable to that of enzymes, and that the method works even when enzymatic cleavages fail."
    },
    {
        title: "Engineered trimeric ACE2 binds viral spike protein and locks it in “Three-up” conformation to potently inhibit SARS-CoV-2 infection",
        description: "L. Guo#, W. Bi#, X. Wang#, W. Xu#, R. Yan#, Y. Zhang#, K. Zhao, Y. Li, M. Zhang, X. Cai, S. Jiang, Y. Xie, Q. Zhou*, L. Lu*, B. Dang*",
        content: "Coronavirus infection can cause shedding of ACE2 resulting in a decreased level of ACE2 expression. "+
        "This phenomenon is closely related to acute lung injury, and replenishing soluble ACE2 could alleviate acute respiratory distress syndrome (ARDS)."
        +" It has been shown that recombinant soluble ACE2 could inhibit SARS-CoVs infection in cells and organoids.One clinical trial was also registered to use recombinant ACE2 to treat COVID-19. "
        +"However, recombinant soluble ACE2 inhibits viral infection at relatively high concentratios, therefore, it may not be an optimal inhibitor. Since spike proteins of SARS-CoVs function as trimers, "
        +"we reasoned that an engineered trimeric ACE2 protein could potentially bind up to three receptor binding domains (RBD) on the spike protein, which would dramatically increase binding affinity "
        +"and thus potently inhibit SARS-CoVs."
    },
    {
        title:"SNAC-tag for Sequence-specific Chemical Protein Cleavage",
        description: "B. Dang*, M. Mravic, H, Hu, N. Scmidt, B. Mensa, W. F. DeGrado*",
        content: "Site-specific protein cleavage is essential for many protein-production protocols and typically requires proteases. We report the development of a chemical protein-cleavage method that is achieved through the use of a sequence-specific nickel-assisted cleavage (SNAC)-tag. We demonstrate that the SNAC-tag can be inserted before both water-soluble and membrane proteins to achieve fusion protein cleavage under biocompatible conditions with efficiency comparable to that of enzymes, and that the method works even when enzymatic cleavages fail."
    },
    

];


    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="publication-container">
            <div className="publication-title">
                <p>Publications</p>
            </div>
            <div className="publication-items">
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
                                description={item.description}
                            />
                            <p>{item.content}</p>
                            
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

export default Publication;

