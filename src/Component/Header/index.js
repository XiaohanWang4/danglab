import "./index.css";
import Menu from "../Menu";

const CustomHeader = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <div className="logo"/>
            </div>
            <div className="header-menu-container">
                <Menu className="header-menu" />
            </div>
        </div>
    )
}

export default CustomHeader;