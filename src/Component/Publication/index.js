import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Publication = () => {
    const listData = [
    {
        title: "Engineered trimeric ACE2 binds viral spike protein and locks it in “Three-up” conformation to potently inhibit SARS-CoV-2 infection. Cell Res. 31, 98–100 (2021).",
        description: "L. Guo#, W. Bi#, X. Wang#, W. Xu#, R. Yan#, Y. Zhang#, K. Zhao, Y. Li, M. Zhang, X. Cai, S. Jiang, Y. Xie, Q. Zhou*, L. Lu*, B. Dang*",
        content: "Coronavirus infection can cause shedding of ACE2 resulting in a decreased level of ACE2 expression. "+
         "This phenomenon is closely related to acute lung injury, and replenishing soluble ACE2 could alleviate acute respiratory distress syndrome (ARDS)."
        +" It has been shown that recombinant soluble ACE2 could inhibit SARS-CoVs infection in cells and organoids.One clinical trial was also registered to use recombinant ACE2 to treat COVID-19. "
        +"However, recombinant soluble ACE2 inhibits viral infection at relatively high concentratios, therefore, it may not be an optimal inhibitor. Since spike proteins of SARS-CoVs function as trimers, "
        +"we reasoned that an engineered trimeric ACE2 protein could potentially bind up to three receptor binding domains (RBD) on the spike protein, which would dramatically increase binding affinity "
        +"and thus potently inhibit SARS-CoVs."
    },
    {
        title: "Platform to discover protease-activated antibiotics and application to siderophore–antibiotic conjugates. J. Am. Chem. Soc., 2020, 142, 51, 21310–21321.",
        description: "J. Boyce, B. Dang*, B. Ary, Q. Edmondson, C. Craik, W. F. DeGrado*, I. Seiple*",
        content: "Here we present a platform for discovery of protease-activated prodrugs and apply it to antibiotics that target Gram-negative bacteria. Because cleavable linkers for prodrugs had not been developed for bacterial proteases, we used substrate phage to discover substrates for proteases found in the bacterial periplasm. Rather than focusing on a single protease, we used a periplasmic extract of E. coli to find sequences with the greatest susceptibility to the endogenous mixture of periplasmic proteases. Using a fluorescence assay, candidate sequences were evaluated to identify substrates that release native amine-containing payloads. We next designed conjugates consisting of (1) an N-terminal siderophore to facilitate uptake, (2) a protease-cleavable linker, and (3) an amine-containing antibiotic. Using this strategy, we converted daptomycin-which by itself is active only against Gram-positive bacteria-into an antibiotic capable of targeting Gram-negative Acinetobacter species. We similarly demonstrated siderophore-facilitated delivery of oxazolidinone and macrolide antibiotics into a number of Gram-negative species. These results illustrate this platform's utility for development of protease-activated prodrugs, including Trojan horse antibiotics."
    },

    {
        title:"SNAC-tag for Sequence-specific Chemical Protein Cleavage. Nat. Methods, 2019, 16, 319-322.",
        description: "B. Dang*, M. Mravic, H. Hu, N. Scmidt, B. Mensa, W. F. DeGrado*",
        content: "Site-specific protein cleavage is essential for many protein-production protocols and typically requires proteases. We report the development of a chemical protein-cleavage method that is achieved through the use of a sequence-specific nickel-assisted cleavage (SNAC)-tag. We demonstrate that the SNAC-tag can be inserted before both water-soluble and membrane proteins to achieve fusion protein cleavage under biocompatible conditions with efficiency comparable to that of enzymes, and that the method works even when enzymatic cleavages fail."
    },
    {
        title: "De novo design of covalently constrained mesosize protein scaffolds with unique tertiary structures. PNAS, 2017, 114, 10852-10857.",
        description: "B. Dang#, H. Wu#, V. K. Mulligan#, M. Mravic, Y. Wu, T. Lemmin, A. Ford, D. A. Silva, D. Baker, W. F. DeGrado",
        content: "The folding of natural proteins typically relies on hydrophobic packing, metal binding, or disulfide bond formation in the protein core. Alternatively, a 3D structure can be defined by incorporating a multivalent cross-linking agent, and this approach has been successfully developed for the selection of bicyclic peptides from large random-sequence libraries. By contrast, there is no general method for the de novo computational design of multicross-linked proteins with predictable and well-defined folds, including ones not found in nature. Here we use Rosetta and Tertiary Motifs (TERMs) to design small proteins that fold around multivalent cross-linkers. The hydrophobic cross-linkers stabilize the fold by macrocyclic restraints, and they also form an integral part of a small apolar core. The designed CovCore proteins were prepared by chemical synthesis, and their structures were determined by solution NMR or X-ray crystallography. These mesosized proteins, lying between conventional proteins and small peptides, are easily accessible either through biosynthetic precursors or chemical synthesis. The unique tertiary structures and ease of synthesis of CovCore proteins indicate that they should provide versatile templates for developing inhibitors of protein-protein interactions."
    },
    {
        title:"Spontaneous and specific chemical cross-linking in live cells to capture and identify protein interactions. Nat. Commun. 2017, 8, 2240.",
        description: "B. Yang, S. Tang, C. Ma, S. T. Li, G. C. Shao, B. Dang, W. F. DeGrado, M. Q. Dong, P. G. Wang, S. Ding, L. Wang.",
        content: "Covalently locking interacting proteins in situ is an attractive strategy for addressing the challenge of identifying weak and transient protein interactions, yet it is demanding to execute chemical reactions in live systems in a biocompatible, specific, and autonomous manner. Harnessing proximity-enabled reactivity of an unnatural amino acid incorporated in the bait toward a target residue of unknown proteins, here we genetically encode chemical cross-linkers (GECX) to cross-link interacting proteins spontaneously and selectively in live cells. Obviating an external trigger for reactivity and affording residue specificity, GECX enables the capture of low-affinity protein binding (affibody with Z protein), elusive enzyme-substrate interaction (ubiquitin-conjugating enzyme UBE2D3 with substrate PCNA), and endogenous proteins interacting with thioredoxin in E. coli cells, allowing for mass spectrometric identification of interacting proteins and crosslinking sites. This live cell chemistry-based approach should be valuable for investigating currently intangible protein interactions in vivo for better understanding of biology in physiological settings."
    },
    {
        title: "Nav channel binder containing a specific conjugation-site based on a low toxicity β-scorpion toxin. Sci. Rep., 2017, 7, 16329.",
        description: "T. Kubota#, B. Dang#, J. L. Carvalho-de-Souza, A. M. Correa, F. Bezanilla",
        content: "Voltage-gated sodium (Nav) channels play a key role in generating action potentials which leads to physiological signaling in excitable cells. The availability of probes for functional studies of mammalian Nav is limited. Here, by introducing two amino acid substitutions into the beta scorpion toxin Ts1, we have chemically synthesized a novel binder [S14R, W50Pra]Ts1 for Nav with high affinity, low dissociation rate and reduced toxicity while retaining the capability of conjugating Ts1 with molecules of interests for different applications. Using the fluorescent-dye conjugate, [S14R, W50Pra(Bodipy)]Ts1, we confirmed its binding to Nav1.4 through Lanthanide-based Resonance Energy Transfer. Moreover, using the gold nanoparticle conjugate, [S14R, W50Pra(AuNP)]Ts1, we were able to optically stimulate dorsal root ganglia neurons and generate action potentials with visible light via the optocapacitive effect as previously reported. [S14R, W50Pra]Ts1 is a novel probe with great potential for wider applications in Nav-related neuroscience research."
    },
    {
        title: "Inversion of the Side-Chain Stereochemistry of Indvidual Thr or Ile Residues in a Protein Molecule: Impact on the Folding, Stability, and Structure of the ShK Toxin. Angew. Chem. Int. Ed., 2017, 56, 3324-3328.",
        description: "B. Dang*, R. Shen, T. Kubota, K. Mandal, F. Bezanilla, B. Roux, S. B. H. Kent",
        content: "ShK toxin is a cysteine-rich 35-residue protein ion-channel ligand isolated from the sea anemone Stichodactyla helianthus. In this work, we studied the effect of inverting the side chain stereochemistry of individual Thr or Ile residues on the properties of the ShK protein. Molecular dynamics simulations were used to calculate the free energy cost of inverting the side-chain stereochemistry of individual Thr or Ile residues. Guided by the computational results, we used chemical protein synthesis to prepare three ShK polypeptide chain analogues, each containing either an allo-Thr or an allo-Ile residue. The three allo-Thr or allo-Ile-containing ShK polypeptides were able to fold into defined protein products, but with different folding propensities. Their relative thermal stabilities were measured and were consistent with the MD simulation data. Structures of the three ShK analogue proteins were determined by quasi-racemic X-ray crystallography and were similar to wild-type ShK. All three ShK analogues retained ion-channel blocking activity."
    },
    {
        title: "Reinvestigation of the biological activity of d-allo-ShK protein. J. Biol. Chem., 2017, 292, 12599-12605.",
        description: "B. Dang*, S. Chhabra, M. W. Pennington, R. S. Norton, S. B. H. Kent.",
        content: "ShK toxin from the sea anemone Stichodactyla helianthus is a 35-residue protein that binds to the Kv1.3 ion channel with high affinity. Recently we determined the X-ray structure of ShK toxin by racemic crystallography, in the course of which we discovered that d-ShK has a near-background IC50 value ∼50,000 times lower than that of the l-ShK toxin. This lack of activity was at odds with previously reported results for an ShK diastereomer designated d-allo-ShK, for which significant biological activity had been observed in a similar receptor-blocking assay. As reported, d-allo-ShK was made up of d-amino acids, but with retention of the natural stereochemistry of the chiral side chains of the Ile and Thr residues, i.e. containing d-allo-Ile and d-allo-Thr along with d-amino acids and glycine. To understand its apparent biological activity, we set out to chemically synthesize d-allo-ShK and determine its X-ray structure by racemic crystallography. Using validated allo-Thr and allo-Ile, both l-allo-ShK and d-allo-ShK polypeptide chains were prepared by total chemical synthesis. Neither the l-allo-ShK nor the d-allo-ShK polypeptides folded, whereas both l-ShK and d-ShK folded smoothly under the same conditions. Re-examination of NMR spectra of the previously reported d-allo-ShK protein revealed that diagnostic Thr and Ile signals were the same as for authentic d-ShK. On the basis of these results, we conclude that the previously reported d-allo-ShK was in fact d-ShK, the true enantiomer of natural l-ShK toxin, and that the apparent biological activity may have arisen from inadvertent contamination with trace amounts of l-ShK toxin."
    },
    {
        title: "Mapping of voltage sensor positions in resting and inactivated mammalian sodium channels by LRET. PNAS, 2017, 114, E1857-E1865.",
        description: "T. Kubota, T. Durek, B. Dang, R. K. Finol-Urdaneta, D. J. Craik, S. B. H. Kent, R. J. French, F. Bezanilla, A. M. Correa",
        content: "Voltage-gated sodium channels (Navs) play crucial roles in excitable cells. Although vertebrate Nav function has been extensively studied, the detailed structural basis for voltage-dependent gating mechanisms remain obscure. We have assessed the structural changes of the Nav voltage sensor domain using lanthanide-based resonance energy transfer (LRET) between the rat skeletal muscle voltage-gated sodium channel (Nav1.4) and fluorescently labeled Nav1.4-targeting toxins. We generated donor constructs with genetically encoded lanthanide-binding tags (LBTs) inserted at the extracellular end of the S4 segment of each domain (with a single LBT per construct). Three different Bodipy-labeled, Nav1.4-targeting toxins were synthesized as acceptors: β-scorpion toxin (Ts1)-Bodipy, KIIIA-Bodipy, and GIIIA-Bodipy analogs. Functional Nav-LBT channels expressed in Xenopus oocytes were voltage-clamped, and distinct LRET signals were obtained in the resting and slow inactivated states. Intramolecular distances computed from the LRET signals define a geometrical map of Nav1.4 with the bound toxins, and reveal voltage-dependent structural changes related to channel gating."
    },
    {
        title: "Elucidation of the Covalent and Tertiary Structures of Biologically Active Ts3 Toxin. Angew. Chem. Int. Ed., 2016, 55, 8639-8642.",
        description: "B. Dang, T. Kubota, K. Mandal, A. M. Correa, F. Bezanilla, S. B. H. Kent.",
        content: "Ts3 is an alpha scorpion toxin from the venom of the Brazilian scorpion Tityus serrulatus. Ts3 binds to the domain IV voltage sensor of voltage-gated sodium channels (Nav ) and slows down their fast inactivation. The covalent structure of the Ts3 toxin is uncertain, and the structure of the folded protein molecule is unknown. Herein, we report the total chemical synthesis of four candidate Ts3 toxin protein molecules and the results of structure-activity studies that enabled us to establish the covalent structure of biologically active Ts3 toxin. We also report the synthesis of the mirror image form of the Ts3 protein molecule, and the use of racemic protein crystallography to determine the folded (tertiary) structure of biologically active Ts3 toxin by X-ray diffraction."
    },
    {
        title: "Enhanced Solvation of Peptides Attached to “Solid-Phase” Resins: Straightforward Syntheses of the Elastin Sequence Pro-Gly-Val-Gly-Val-Pro-Gly-Val-Gly-Val. Org. Lett., 2015, 17, 3521-3523.",
        description: "B. Dang, B. Dhayalan, S. B. H. Kent",
        content: "The solubility-enhancing power of covalent attachment to solvent-swollen cross-linked resin supports was illustrated by syntheses of the highly aggregating elastin-derived 10-residue peptide sequence Pro-Gly-Val-Gly-Val-Pro-Gly-Val-Gly-Val using standard protocols for both Boc and Fmoc chemistry SPPS."
    },
    {
        title: "Photosensitivity of Neurons Enabled by Cell-Targeted Gold Nanoparticles. Neuron, 2015, 86, 207-217.  Highlighted in Nature, Nature Methods, Nature Review Neuroscience",
        description: "J. L. Carvalho-de-Souza#, J. S. Treger#, B. Dang#, S. B. H. Kent. D. R. Pepperberg, F. Bezanilla",
        content: "Unmodified neurons can be directly stimulated with light to produce action potentials, but such techniques have lacked localization of the delivered light energy. Here we show that gold nanoparticles can be conjugated to high-avidity ligands for a variety of cellular targets. Once bound to a neuron, these particles transduce millisecond pulses of light into heat, which changes membrane capacitance, depolarizing the cell and eliciting action potentials. Compared to non-functionalized nanoparticles, ligand-conjugated nanoparticles highly resist convective washout and enable photothermal stimulation with lower delivered energy and resulting temperature increase. Ligands targeting three different membrane proteins were tested; all showed similar activity and washout resistance. This suggests that many types of ligands can be bound to nanoparticles, preserving ligand and nanoparticle function, and that many different cell phenotypes can be targeted by appropriate choice of ligand. The findings have applications as an alternative to optogenetics and potentially for therapies involving neuronal photostimulation."
    },
    {
        title: "Total Chemical Synthesis of Biologically Active Fluorescent Dye-Labeled Ts1 Toxin. Angew. Chem. Int. Ed., 2014, 53, 8970-8974.",
        description: "B. Dang#, T. Kubota#, A. M. Correa, F. Bezanilla, S. B. H. Kent",
        content: "Ts1 toxin is a protein found in the venom of the Brazilian scorpion Tityus serrulatus. Ts1 binds to the domain II voltage sensor in the voltage-gated sodium channel Nav and modifies its voltage dependence. In the work reported here, we established an efficient total chemical synthesis of the Ts1 protein using modern chemical ligation methods and demonstrated that it was fully active in modifying the voltage dependence of the rat skeletal muscle voltage-gated sodium channel rNav1.4 expressed in oocytes. Total synthesis combined with click chemistry was used to label the Ts1 protein molecule with the fluorescent dyes Alexa-Fluor 488 and Bodipy. Dye-labeled Ts1 proteins retained their optical properties and bound to and modified the voltage dependence of the sodium channel Nav. Because of the highly specific binding of Ts1 toxin to Nav, successful chemical synthesis and labeling of Ts1 toxin provides an important tool for biophysical studies, histochemical studies, and opto-pharmacological studies of the Nav protein."
    },
    {
        title: "Native Chemical Ligation at Asx-Cys, Glx-Cys: Chemical Synthesis and High-Resolution X-ray Structure of ShK Toxin by Racemic Protein Crystallography. J. Am. Chem. Soc., 2013, 135,11911-11919.",
        description: "B. Dang, T. Kubota, K. Mandal, F. Bezanilla, S. B. H. Kent",
        content: "We have re-examined the utility of native chemical ligation at -Gln/Glu-Cys- [Glx-Cys] and -Asn/Asp-Cys- [Asx-Cys] sites. Using the improved thioaryl catalyst 4-mercaptophenylacetic acid (MPAA), native chemical ligation could be performed at -Gln-Cys- and Asn-Cys- sites without side reactions. After optimization, ligation at a -Glu-Cys- site could also be used as a ligation site, with minimal levels of byproduct formation. However, -Asp-Cys- is not appropriate for use as a site for native chemical ligation because of formation of significant amounts of β-linked byproduct. The feasibility of native chemical ligation at -Gln-Cys- enabled a convergent total chemical synthesis of the enantiomeric forms of the ShK toxin protein molecule. The D-ShK protein molecule was ~50,000-fold less active in blocking the Kv1.3 channel than the L-ShK protein molecule. Racemic protein crystallography was used to obtain high-resolution X-ray diffraction data for ShK toxin. The structure was solved by direct methods and showed significant differences from the previously reported NMR structures in some regions of the ShK protein molecule."
    },
    

];


    return (
        <Layout>
<Header className="header">
  <CustomHeader/>
</Header>
<Content >
<div className="publication-container">
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

