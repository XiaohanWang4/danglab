import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Team = () => {
    const listData = [{
        name: "Principle Investigator",
        title: "Bobo Dang",
        description: "Dr. Dang received his B.S. in School of Chemistry and Chemical Engineering at Nanjing University. He then went to the University of Chicago and obtained his Ph.D. degree in Department of Chemistry focusing on studying protein ion channel ligands (venom toxins) through chemical protein synthesis. Dr. Dang did his post-doctoral researches at Department of Pharmaceutical Chemistry, UCSF using computational protein design and biological display technologies to develop novel protein structures and technologies. Dr. Dang has published many papers in high-profile journals including Nature Methods, J. Am. Chem. Soc., Angew. Chem. Int. Ed., Neuron, PNAS. Outside of scientific research, Dr. Dang likes rock climbing, snowboarding and hiking.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/dang%20bobo.png"
    },
    {
        name: "Reasearch Assistant Professor",
        title: "Tian Li",
        description: "Tian Li graduated with a PhD degree from the University of Tennessee/Oak Ridge National Laboratory in 2014. She finished her post-doc training as a membrane protein structural biologist in Eduado Perozo's lab in 2019 before she joined the Cryo-EM facility in the University of Chicago. She worked in a startup biotechnological company studied anti-cancer immunotherapy until she joined the Dang's laboratory in 2021 as a research assistant professor focusing on protein engineering and novel macromolecule drug development.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/li%20tian.png"
    },
    {
        name: "Postdoctor",
        title: "Wenwen Bi",
        description: "Wenwen Bi graduated from Fudan University in 2020 with a biology Ph.D., she joined the Dang's laboratory in June 2020 and mainly focused on the research of antiviral proteins, peptide drugs and vaccines.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/bi%20wenwen.png"
    },
    {
        name: "Postdoctor",
        title: "Qiuju He",
        description: "Qiuju He graduated from Zhejiang University in 2020 with a biology Ph.D., she joined the Dang's laboratory in July 2020 and mainly focused on the development of novel protein research tools based on high-throughput screening.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/he%20qiuju.png"
    },
    {
        name: "Postdoctor",
        title: "Kuan Lu",
        description: "Kuan Lu graduated from Shenyang Pharmaceutical University in 2018 with a Medicinal Chemistry Ph.D., he joined the Dang's laboratory in July 2020 and mainly focused on the research of antibody-drug conjugate and total synthesis of protein.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/lu%20kuan.png"
    },
    {
        name: "Postdoctor",
        title: "Chuanlong Zang",
        description: "Dr. Zang received his Ph.D. degree in organic chemistry from Nankai University with Prof. Chuanzheng Zhou in 2020. He was focused on study of prodrug activation and protein chemical modification. In Feburary 2021, he joined to the Dang's laboratory as a postdoc.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/zang%20chuan%20long.png"
    },
    {
        name: "Postdoctor",
        title: "Yuefei Zhang",
        description: "Yuefei Zhang graduated from Zhejiang University in 2020 with a PhD degree in Pathology and Pathophysiology. He joined the Dang's laboratory in March 2021 and committed to the development of drug delivery system based on exosomes.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/yuefei.png"
    },
    {
        name: "Postdoctor",
        title: "Yingjie Lei",
        description: "Yingjie Lei graduated from Lanzhou University in 2020 with a Ph.D. in Biochemistry and Molecular Biology. He joined the Dang's laboratory in July 2020 and commited to the development of protein macromolecular drugs using chemical coupling modification strategy.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/lei%20yingjie.png"
    },
    {
        name: "Ph.D. student",
        title: "Kai Zhao",
        description: "Kai Zhao graduated from Jiangnan University in 2019 with a sugar engineering Master degree, he joined the Dang's laboratory in August 2019 and mainly focused on the research of high throughput peptide or protein screening through phage display technology.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/zhao%20kai.png"
    },
    {
        name: "Ph.D. student",
        title: "Qiongxuan Fan",
        description: "Qiongxuan Fan graduated from Nanjing University with a master's degree, majoring in biochemistry. She joined the Dang's laboratory in July 2020 for doctoral research.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/fan%20qiongxuan.png"
    },
    {
        name: "Ph.D. student",
        title: "Jianyi Han",
        description: "Jianyi Han graduated from Institute of Chinese Material Medica, China Academy of Chinese Medical Sciences and Peking Union Medical college with a master's degree in 2020. He is currently doing doctoral research in Dang's laboratory of Westlake University.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/han%20jianyi.png"
    },
    {
        name: "Ph.D. student",
        title: "Mengjiao Li",
        description: "Mengjiao Li is a doctoral student of 2020. She graduated from the State Key Laboratory of Biotherapy, West China Hospital, Sichuan University in 2020 with a Bachelor's degree in Pharmacy. Now she is interested in the research of peptide drugs and neuronal activation.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/li%20meng%20jiao.png"
    },
    
    {
        name: "Ph.D. student",
        title: "Guilin Chen",
        description: "Guilin Chen graduated from Zhejiang Normal University in 2019, Master of Science, major in solid-phase chemical synthesis of proteins.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/guilin.png"
    },
    {
        name: "Ph.D. student",
        title: "Liang Guo",
        description: "Liang Guo graduated from University of Copenhagen with a master's degree. He is currently doing doctoral research in the Dang's laboratory of Westlake University.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/guo%20liang.png"
    },
    {
        name: "Ph.D. student",
        title: "Mengzhun Guo",
        description: "Mengzhun Guo is a doctoral student of 2019, graduated from Lanzhou University in 2019 with a master's degree in pharmacology. She is interested in the modification of peptides and proteins at specific site.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/guo%20mengzhun.png"
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
                <p>Team</p>
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

