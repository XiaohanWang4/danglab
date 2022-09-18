import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
import img1 from "../../images/dangbobo.png"
import img2 from "../../images/litian.png"
import img3 from "../../images/yuge.jpeg"
import img4 from "../../images/biwenwen.png"
import img5 from "../../images/heqiuju.png"
import img7 from "../../images/zangchuanlong.png"
import img8 from "../../images/yuefei.png"
import img9 from "../../images/leiyingjie.png"
import img10 from "../../images/meijiahao.jpeg"
import img11 from "../../images/zhaokai.png"
import img12 from "../../images/fanqiongxuan.png"
import img13 from "../../images/hanjianyi.png"
import img14 from "../../images/limengjiao.png"
import img15 from "../../images/guilin.png"
import img16 from "../../images/guoliang.png"
import img17 from "../../images/guomengzhun.png"
import img18 from "../../images/ganbeeha.jpg"
const { Header, Content, Footer } = Layout;
function getImg(item ){
     if(item.image){
         return        <img
         width={272}
         alt="logo"
         src={item.image}
       />
     }else{
         return <div></div>
     }
}
const Team = () => {
    const listData = [
    {
        index:1,
        title: "Principal Investigator",
        name: "Bobo Dang",
        description: "Dr. Dang received his B.S. in School of Chemistry and Chemical Engineering at Nanjing University. He then went to the University of Chicago and obtained his Ph.D. degree in Department of Chemistry focusing on studying protein ion channel ligands (venom toxins) through chemical protein synthesis. Dr. Dang did his post-doctoral researches at Department of Pharmaceutical Chemistry, UCSF using computational protein design and biological display technologies to develop novel protein structures and technologies. Dr. Dang has published many papers in high-profile journals including Nature Methods, J. Am. Chem. Soc., Angew. Chem. Int. Ed., Neuron, PNAS. Outside of scientific research, Dr. Dang likes rock climbing, snowboarding and hiking.",
        image: img1
    },
    {
        title: "Research Associate Professor",
        name: "Tian Li",
        description: "Tian Li graduated with a PhD degree from the University of Tennessee/Oak Ridge National Laboratory in 2014. She finished her post-doc training as a membrane protein structural biologist in Eduado Perozo's lab in 2019 before she joined the Cryo-EM facility in the University of Chicago. She worked in a startup biotechnological company studied anti-cancer immunotherapy until she joined the Dang's laboratory in 2021 as a research assistant professor focusing on protein engineering and novel macromolecule drug development.",
        image: img2
    },
    {
        title: "Research Assistant Professor",
        name: "Ge Yu",
        description: "Ge Yu graduated with a Ph.D. degree focusing on structural biology from Florida State University in 2017 and went to Texas A&M University for postdoctoral training in chemical biology fields until she joined Dang Lab in 2021. Her research mainly focuses on novel protein drug development and new protein engineering strategies exploration.",
        image: img3
    },
    {
        title: "Research Assistant Professor",
        name: "Yingjie Lei",
        description: "Yingjie Lei graduated from Lanzhou University in 2020 with a Ph.D. in Biochemistry and Molecular Biology. He joined the Dang's laboratory in July 2020 and commited to the development of protein macromolecular drugs using chemical coupling modification strategy.",
        image: img9
    },
    {
        title: "Postdoctor",
        name: "Wenwen Bi",
        description: "Wenwen Bi graduated from Fudan University in 2020 with a biology Ph.D., she joined the Dang's laboratory in June 2020 and mainly focused on the research of antiviral proteins, peptide drugs and vaccines.",
        image: img4
    },
    {
        title: "Postdoctor",
        name: "Qiuju He",
        description: "Qiuju He graduated from Zhejiang University in 2020 with a biology Ph.D., she joined the Dang's laboratory in July 2020 and mainly focused on the development of novel protein research tools based on high-throughput screening.",
        image: img5
    },
    {
        title: "Postdoctor",
        name: "Chuanlong Zang",
        description: "Dr. Zang received his Ph.D. degree in organic chemistry from Nankai University with Prof. Chuanzheng Zhou in 2020. He was focused on study of prodrug activation and protein chemical modification. In Feburary 2021, he joined to the Dang's laboratory as a postdoc.",
        image: img7
    },
    {
        title: "Postdoctor",
        name: "Yuefei Zhang",
        description: "Yuefei Zhang graduated from Zhejiang University in 2020 with a PhD degree in Pathology and Pathophysiology. He joined the Dang's laboratory in March 2021 and committed to the development of drug delivery system based on exosomes.",
        image: img8
    },
    {
        title: "Postdoctor",
        name: "Bee Ha Gan",
        description: "Bee Ha Gan obtained her PhD in Chemical Biology at the University of Bern (Switzerland) in 2019, where her research focused on antimicrobial peptides and peptide dendrimers under the supervision of Prof. Jean-Louis Reymond. She was a postdoctoral researcher in the group of Prof. David Spring at the University of Cambridge until she joined the group of Prof. Dang. Her research focuses on novel peptide and protein drug development for various biological applications.",
        image: img18
    },
    {
        title: "Ph.D. student",
        name: "Jiahao Mei",
        description: "Jiahao Mei graduated with a Master degree at China Pharmaceutical University in 2020.  At CPU, he worked in the laboratories of innate immunity to develop new small molecule inhibitors for autoimmunity diseases. Jiahao joined the Dang’s laboratory in 2021 as a doctoral student of Westlake University. The focus of his research is to develop novel macromolecule drug by protein engineering.",
        image: img10
    },
    {
        title: "Ph.D. student",
        name: "Kai Zhao",
        description: "Kai Zhao graduated from Jiangnan University in 2019 with a sugar engineering Master degree, he joined the Dang's laboratory in August 2019 as a Research Assistant and now he is doing his Ph.D. degree in biology and mainly focused on the research of high throughput peptide or protein screening through phage display technology.",
        image: img11
    },
    {
        title: "Ph.D. student",
        name: "Qiongxuan Fan",
        description: "Qiongxuan Fan graduated from Nanjing University with a master's degree, majoring in biochemistry. She joined the Dang's laboratory in July 2020 for doctoral research.",
        image: img12
    },
    {
        title: "Ph.D. student",
        name: "Jianyi Han",
        description: "Jianyi Han graduated from Institute of Chinese Material Medica, China Academy of Chinese Medical Sciences and Peking Union Medical college with a master's degree in 2020. He is currently doing doctoral research in Dang's laboratory of Westlake University.",
        image:img13
    },
    {
        title: "Ph.D. student",
        name: "Mengjiao Li",
        description: "Mengjiao Li is a doctoral student of 2020. She graduated from the State Key Laboratory of Biotherapy, West China Hospital, Sichuan University in 2020 with a Bachelor's degree in Pharmacy. Now she is interested in the research of peptide drugs and neuronal activation.",
        image: img14
    },
    
    {
        title: "Ph.D. student",
        name: "Guilin Chen",
        description: "Guilin Chen graduated from Zhejiang Normal University in 2019, Master of Science, major in solid-phase chemical synthesis of proteins.",
        image: img15
    },
    {
        title: "Ph.D. student",
        name: "Liang Guo",
        description: "Liang Guo graduated from University of Copenhagen with a master's degree. He is currently doing doctoral research in the Dang's laboratory of Westlake University.",
        image: img16
    },
    {
        title: "Ph.D. student",
        name: "Mengzhun Guo",
        description: "Mengzhun Guo is a doctoral student of 2019, graduated from Lanzhou University in 2019 with a master's degree in pharmacology. She is interested in the modification of peptides and proteins at specific site.",
        image: img17
    },
    {
        title: "Alumni"
    },
    {
        title: "Kuan Lu",
        description: "Postdoctor (Jul 2020 - Jul 2022);     focused on the research of antibody-drug conjugate and total synthesis of protein."
    },

    

];


    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="team-container">
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
                                title={item.title}
                                description={item.name}
                            />
                            <div className="list-data">
                                <br/>
                                <div className="list-img">
                                   {getImg(item)}                             
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

