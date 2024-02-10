import { List, Layout } from "antd";
import ContactInfo from "../ContactInfo";
import CustomHeader from "../Header";
import "./index.css";
const { Header, Content, Footer } = Layout;
const Publication = () => {
    const listData = [
    {
        title: "An enhanced broad-spectrum peptide inhibits Omicron variants in vivo[J]. Cell Rep Med (2024). ",
        description: "W. Bi#, K. Tang#, G. Chen#, Y. Xie, N. Polizzi, W. DeGrado, S. Yuan*, B. Dang*.",
        content: "The continual emergence of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) variants of concern (VOCs) poses a major challenge to vaccines and antiviral therapeutics due to their extensive evasion of immunity. Aiming to develop potent and broad-spectrum anticoronavirus inhibitors, we generated A1- (GGGGS)7-HR2m (A1L35HR2m) by introducing an angiotensin-converting enzyme 2 (ACE2)-derived peptide A1 to the N terminus of the viral HR2-derived peptide HR2m through a long flexible linker, which showed significantly improved antiviral activity. Further cholesterol (Chol) modification at the C terminus of A1L35HR2m greatly enhanced the inhibitory activities against SARS-CoV-2, SARS-CoV-2 VOCs, SARS- CoV, and Middle East respiratory syndrome coronavirus (MERS-CoV) pseudoviruses, with IC50 values ranging from 0.16 to 5.53 nM. A1L35HR2m-Chol also potently inhibits spike-protein-mediated cell-cell fusion and the replication of authentic Omicron BA.2.12.1, BA.5, and EG.5.1. Importantly, A1L35HR2m-Chol distrib- uted widely in respiratory tract tissue and had a long half-life (>10 h) in vivo. Intranasal administration of A1L35HR2m-Chol to K18-hACE2 transgenic mice potently inhibited Omicron BA.5 and EG.5.1 infection both prophylactically and therapeutically."
    },
    {
        title: "Copper assisted sequence-specific chemical protein conjugation at a single backbone amide. Nat Commun 14, 8063 (2023). ",
        description: "M. Guo#, K. Zhao#, L. Guo#, R. Zhou#, Q. He, K. Lu, T. Li, D. Liu, J. Chen, J. Tang, X. Fu, J. Zhou, B. Zheng, S. Mann, Y. Zhang, J. Huang, B. Yang, T. Zhou*, Y. Lei*, B. Dang*.",
        content: "Direct, site-specific methods of protein functionalization are highly desirable for biotechnology. However, such methods are challenging due to the difficulty of chemically differentiating a single site within a large protein. Herein, we propose “metal binding targeting” strategy and develop a Copper Assisted Sequence-specific conjugation Tag (CAST) method to achieve rapid (second order rate 8.1 M−1 s−1), site-specific protein backbone chemical modification with pinpoint accuracy. We demonstrate the versatility of CAST conjugation by preparing various on-demand modified recombinant proteins, including a homogeneous antibody-drug conjugate with high plasma stability and potent efficacy in vitro and in vivo. Thus, CAST provides an efficient and quantitative method to site-specifically attach payloads on large, native proteins."
    },
    {
        title: "Identification of SARS-CoV-2 PLpro and 3CLpro human proteome substrates using substrate phage display coupled with protein network analysis[J]. J Biol Chem, 2023, 299(6).",
        description: "K. Zhao, Y. Li, M. Guo, L. Ma, B. Dang*",
        content: "Viral proteases play key roles in viral replication, and they also facilitate immune escape by proteolyzing diverse target proteins. Deep profiling of viral protease substrates in host cells is beneficial for understanding viral pathogenesis and for antiviral drug discovery. Here, we utilized substrate phage display coupled with protein network analysis to identify human proteome substrates of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) viral proteases, including papain-like protease (PLpro) and 3C-like protease (3CLpro). We first performed peptide substrates selection of PLpro and 3CLpro, and we then used the top 24 preferred substrate sequences to identify a total of 290 putative protein substrates. Protein network analysis revealed that the top clusters of PLpro and 3CLpro substrate proteins contain ubiquitin-related proteins and cadherin-related proteins, respectively. We verified that cadherin-6 and cadherin-12 are novel substrates of 3CLpro, and CD177 is a novel substrate of PLpro using in vitro cleavage assays. We thus demonstrated that substrate phage display coupled with protein network analysis is a simple and high throughput method to identify human proteome substrates of SARS-CoV-2 viral proteases for further understanding of virus–host interactions."
    },
    {
        title: "A high-throughput fully automatic biosensing platform for efficient COVID-19 detection[J]. Biosens Bioelectron, 2023, 220: 114861.",
        description: "G. Rong, Y. Zheng, X. Li, M. Guo, Y. Su, S. Bian, B. Dang, Y. Chen, Y. Zhang, L. Shen, H. Jin, R. Yan, L. Wen, P. Zhu, M. Sawan",
        content: "We propose a label-free biosensor based on a porous silicon resonant microcavity and localized surface plasmon resonance. The biosensor detects SARS-CoV-2 antigen based on engineered trimeric angiotensin converting enzyme-2 binding protein, which is conserved across different variants. Robotic arms run the detection process including sample loading, incubation, sensor surface rinsing, and optical measurements using a portable spectrometer. Both the biosensor and the optical measurement system are readily scalable to accommodate testing a wide range of sample numbers. The limit of detection is 100 TCID50/ml. The detection time is 5 min, and the throughput of one single robotic site is up to 384 specimens in 30 min. The measurement interface requires little training, has standard operation, and therefore is suitable for widespread use in rapid and onsite COVID-19 screening or surveillance."
    },
    {
        title: "Zfp106 binds to G-quadruplex RNAs and inhibits RAN translation and formation of RNA foci caused by G4C2 repeats[J]. bioRxiv, 2023: 2023.03. 05.531055.",
        description: "B. Celona, H. Wu, B. Dang, H. Kratochvil, W. DeGrado, B. Black",
        content: "Expansion of intronic GGGGCC repeats in the C9orf72 gene causes amyotrophic lateral sclerosis (ALS) and frontotemporal dementia (FTD). Transcription of the expanded repeats results in the formation of RNA-containing nuclear foci and altered RNA metabolism. In addition, repeat-associated non-AUG (RAN) translation of the expanded GGGGCC-repeat sequence results in the production of highly toxic dipeptide-repeat (DPR) proteins. GGGGCC-repeat-containing transcripts form G-quadruplexes, which are associated with formation of RNA foci and RAN translation. Zfp106, an RNA-binding protein essential for motor neuron survival in mice, suppresses neurotoxicity in a Drosophila model of C9orf72 ALS via a previously unknown mechanism. Here, we show that Zfp106 inhibits formation of RNA foci and significantly reduces RAN translation caused by GGGGCC-repeats in mammalian cells. Further, we show that Zfp106 binds to RNA G-quadruplexes and causes a conformational change in the G-quadruplex structure formed by GGGGCC-repeats. These data suggest that Zfp106 suppresses GGGGCC repeat-mediated cytotoxicity through alteration of the G-quadruplex structure."
    },
    {
        title: "Precise control of embolic stroke with magnetized red blood cells in mice. Commun Biol 5, 136 (2022).",
        description: "Y. Jin, P. Shi, Y. Wang, J. Li, J. Zhang, X. Zhao, Y. Ge, Y. Huang, M. Guo, F. Wang, B. Ci, X.  Xiao, X. Gao, J. Xu, B. Dang, B. Ji, W. Ge, J. Jia",
        content: "Precise embolism control in immature brains can facilitate mechanistic studies of brain damage and repair after perinatal arterial ischemic stroke (PAIS), but it remains a technical challenge. Microhemorrhagic transformation is observed in one-third of infant patients who have suffered PAIS, but the underlying mechanism remains elusive. Building on an established approach that uses magnetic nanoparticles to induce PAIS, we develop a more advanced approach that utilizes magnetized erythrocytes to precisely manipulate de novo and in situ embolus formation and reperfusion in perinatal rodent brains. This approach grants spatiotemporal control of embolic stroke without any transarterial delivery of pre-formed emboli. Transmission electron microscopy revealed that erythrocytes rather than nanoparticles are the main material obstructing the vessels. Both approaches can induce microbleeds as an age-dependent complication; this complication can be prevented by microglia and macrophage depletion. Thus, this study provides an animal model mimicking perinatal embolic stroke and implies a potential therapeutic strategy for the treatment of perinatal stroke."
    },
    {
        title: "Novel Engineered SARS-CoV-2 HR1 Trimer Exhibits Improved Potency and Broad-spectrum Activity against SARS-CoV-2 and Its Variants. J Virol, 2022: e00681-22.",
        description: "W. Bi*, G. Chen, B. Dang*",
        content: "we have constructed a trimeric peptide HR1MFd by fusing the trimerization motif foldon to the C-terminus of the HR1 peptide. HR1MFd was highly effective in blocking transductions by SARS-CoV-2, SARS-CoV-2 variants, SARS-CoV and MERS-CoV pseudoviruses. In comparison with HR1M, HR1MFd adopts a much higher helical conformation, better thermostability, increased affinity to the viral HR2 domain and better inhibition of S protein-mediated cell-cell fusion. Overall, HR1MFd provides the information to develop effective HR1-derived peptides as fusion inhibitors against SARS-CoV-2 and its variants."
    },
    {
        title: "Enhanced trimeric ACE2 exhibits potent prophylactic and therapeutic efficacy against the SARS-CoV-2 Delta and Omicron variants in vivo. Cell Res, 2022, 32(6): 589-592.",
        description: "M.Li#, Z. Ye#, K. Tang#, L. Guo#, W. Bi, Y. Zhang, Y. Tang, G. Rong, M. Sawan, X. Yin, R. Sun, S. Yuan*, B. Dang*",
        content: "We and others have envisioned that an engineered ACE2 decoy protein would have the broadest neutralizing activity, which could overcome the viral mutational escape problem.7,8,9,10,11 We recently reported that the trimeric ACE2 protein (T-ACE2) could maximally enhance the binding affinity of spike protein to neutralize SARS-CoV-2.9 Herein, we further engineered T-ACE2 to improve its neutralizing activity to generate one of the strongest entry inhibitors and demonstrated that this enhanced T-ACE2 (eT-ACE2) protein possessed potent prophylactic and therapeutic efficacy against the Delta and Omicron variants in mouse and hamster animal models."
    },
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

