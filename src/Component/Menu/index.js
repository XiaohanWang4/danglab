import "./index.css";

const Menu = () => {
    return (
        <div className="menu-container">

        <span onClick={() => window.location.href="/"} className="url">Home</span> 
        <span onClick={() => window.location.href="/research"} className="url">Research</span>
        <span onClick={() => window.location.href="/team"} className="url">Team</span>
        <span onClick={() => window.location.href="/publication"} className="url">Publication</span>
        <span onClick={() => window.location.href="/join"} className="url">Join us</span>
        <span onClick={() => window.location.href="/resource"} className="url">Resource</span>
        </div>
    )
}

export default Menu;