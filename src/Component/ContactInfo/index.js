import "./index.css";

const ContactInfo = () => {
    return (
        <div className="contact-info">
        <div className="general-info">
        <p className="school">Westlake University</p>
        <p className="location-eng">Shilongshan ST #18, Xihu District, Hangzhou, Zhejiang Province, CN</p>
        <p className="location-eng">Dunyu Road #600, Sandun District, Hangzhou, Zhejiang Province, CN</p>
        <p className="location-chs">中国浙江省杭州市西湖区云栖小镇石龙山街18号（云栖校区）</p>
        <p className="location-chs">中国浙江省杭州市西湖区三墩镇墩余路600号（云谷校区）</p>
        </div>
        <div className="copyright-container">
        <p className="copyright">©2021 BY DANG LAB.</p>
        </div>
        </div>
    );
};

export default ContactInfo;