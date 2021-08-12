import "./index.css";
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="menu-container">
            <Link to="/">  
                <span className="url">Home</span>
            </Link>
            <Link to="/research">  
                <span className="url">Research</span>
            </Link>
            <Link to="/team">  
                <span className="url">Team</span>
            </Link>
            <Link to="/publication">  
                <span className="url">Publication</span>
            </Link>
            <Link to="/join">  
                <span className="url">Join us</span>
            </Link>
            <Link to="/resources">  
                <span className="url">Resources</span>
            </Link>
        </div>
    )
}

export default Menu;