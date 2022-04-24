import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Team = () => {
    const listData = [{
        title: "Principal Investigator",
        name: "Bobo Dang",
        description: "Dr. Dang received his B.S. in School of Chemistry and Chemical Engineering at Nanjing University. He then went to the University of Chicago and obtained his Ph.D. degree in Department of Chemistry focusing on studying protein ion channel ligands (venom toxins) through chemical protein synthesis. Dr. Dang did his post-doctoral researches at Department of Pharmaceutical Chemistry, UCSF using computational protein design and biological display technologies to develop novel protein structures and technologies. Dr. Dang has published many papers in high-profile journals including Nature Methods, J. Am. Chem. Soc., Angew. Chem. Int. Ed., Neuron, PNAS. Outside of scientific research, Dr. Dang likes rock climbing, snowboarding and hiking.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/dang%20bobo.png"
    },
    {
        title: "Research Associate Professor",
        name: "Tian Li",
        description: "Tian Li graduated with a PhD degree from the University of Tennessee/Oak Ridge National Laboratory in 2014. She finished her post-doc training as a membrane protein structural biologist in Eduado Perozo's lab in 2019 before she joined the Cryo-EM facility in the University of Chicago. She worked in a startup biotechnological company studied anti-cancer immunotherapy until she joined the Dang's laboratory in 2021 as a research assistant professor focusing on protein engineering and novel macromolecule drug development.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/li%20tian.png"
    },
    {
        title: "Research Assistant Professor",
        name: "Ge Yu",
        description: "Ge Yu graduated with a Ph.D. degree focusing on structural biology from Florida State University in 2017 and went to Texas A&M University for postdoctoral training in chemical biology fields until she joined Dang Lab in 2021. Her research mainly focuses on novel protein drug development and new protein engineering strategies exploration.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/%E4%BA%8E%E6%AD%8C.jpg"
    },
    {
        title: "Postdoctor",
        name: "Wenwen Bi",
        description: "Wenwen Bi graduated from Fudan University in 2020 with a biology Ph.D., she joined the Dang's laboratory in June 2020 and mainly focused on the research of antiviral proteins, peptide drugs and vaccines.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/bi%20wenwen.png"
    },
    {
        title: "Postdoctor",
        name: "Qiuju He",
        description: "Qiuju He graduated from Zhejiang University in 2020 with a biology Ph.D., she joined the Dang's laboratory in July 2020 and mainly focused on the development of novel protein research tools based on high-throughput screening.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/he%20qiuju.png"
    },
    {
        title: "Postdoctor",
        name: "Kuan Lu",
        description: "Kuan Lu graduated from Shenyang Pharmaceutical University in 2018 with a Medicinal Chemistry Ph.D., he joined the Dang's laboratory in July 2020 and mainly focused on the research of antibody-drug conjugate and total synthesis of protein.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/lu%20kuan.png"
    },
    {
        title: "Postdoctor",
        name: "Chuanlong Zang",
        description: "Dr. Zang received his Ph.D. degree in organic chemistry from Nankai University with Prof. Chuanzheng Zhou in 2020. He was focused on study of prodrug activation and protein chemical modification. In Feburary 2021, he joined to the Dang's laboratory as a postdoc.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/zang%20chuan%20long.png"
    },
    {
        title: "Postdoctor",
        name: "Yuefei Zhang",
        description: "Yuefei Zhang graduated from Zhejiang University in 2020 with a PhD degree in Pathology and Pathophysiology. He joined the Dang's laboratory in March 2021 and committed to the development of drug delivery system based on exosomes.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/yuefei.png"
    },
    {
        title: "Postdoctor",
        name: "Yingjie Lei",
        description: "Yingjie Lei graduated from Lanzhou University in 2020 with a Ph.D. in Biochemistry and Molecular Biology. He joined the Dang's laboratory in July 2020 and commited to the development of protein macromolecular drugs using chemical coupling modification strategy.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/lei%20yingjie.png"
    },
    {
        title: "Ph.D. student",
        name: "Jiahao Mei",
        description: "Jiahao Mei graduated with a Master degree at China Pharmaceutical University in 2020.  At CPU, he worked in the laboratories of innate immunity to develop new small molecule inhibitors for autoimmunity diseases. Jiahao joined the Dang’s laboratory in 2021 as a doctoral student of Westlake University. The focus of his research is to develop novel macromolecule drug by protein engineering.",
        image: "D:\website\team\Jiahao Mei.jpg"
    },
    {
        title: "Ph.D. student",
        name: "Kai Zhao",
        description: "Kai Zhao graduated from Jiangnan University in 2019 with a sugar engineering Master degree, he joined the Dang's laboratory in August 2019 as a Research Assistant and now he is doing his Ph.D. degree in biology and mainly focused on the research of high throughput peptide or protein screening through phage display technology.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/zhao%20kai.png"
    },
    {
        title: "Ph.D. student",
        name: "Qiongxuan Fan",
        description: "Qiongxuan Fan graduated from Nanjing University with a master's degree, majoring in biochemistry. She joined the Dang's laboratory in July 2020 for doctoral research.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/fan%20qiongxuan.png"
    },
    {
        title: "Ph.D. student",
        name: "Jianyi Han",
        description: "Jianyi Han graduated from Institute of Chinese Material Medica, China Academy of Chinese Medical Sciences and Peking Union Medical college with a master's degree in 2020. He is currently doing doctoral research in Dang's laboratory of Westlake University.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/han%20jianyi.png"
    },
    {
        title: "Ph.D. student",
        name: "Mengjiao Li",
        description: "Mengjiao Li is a doctoral student of 2020. She graduated from the State Key Laboratory of Biotherapy, West China Hospital, Sichuan University in 2020 with a Bachelor's degree in Pharmacy. Now she is interested in the research of peptide drugs and neuronal activation.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/li%20meng%20jiao.png"
    },
    
    {
        title: "Ph.D. student",
        name: "Guilin Chen",
        description: "Guilin Chen graduated from Zhejiang Normal University in 2019, Master of Science, major in solid-phase chemical synthesis of proteins.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/guilin.png"
    },
    {
        title: "Ph.D. student",
        name: "Liang Guo",
        description: "Liang Guo graduated from University of Copenhagen with a master's degree. He is currently doing doctoral research in the Dang's laboratory of Westlake University.",
        image: "https://dbblab-1306669979.cos.ap-hongkong.myqcloud.com/guo%20liang.png"
    },
    {
        title: "Ph.D. student",
        name: "Mengzhun Guo",
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

