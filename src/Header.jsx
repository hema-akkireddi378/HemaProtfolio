import { Link } from "react-router-dom"
function Header(){
    return(
        <header className="header-section">
            <h1 className="nameOfTheAuthor">Akkireddi Hema</h1>
            <div className="main-header-links">
            <nav className="nav-elements">
                <ul className="header-links">
                    <li><Link to="/" className="my-details">Home</Link></li>
                    <li><Link to="/About" className="my-details" > About</Link></li>
                    <li><Link to="Internships" className="my-details">Internship</Link></li>
                    <li><Link to="/Projects" className="my-details">Projects</Link></li>
                    <li><Link to="/Certifications" className="my-details">Certifications</Link></li>
                    
                </ul>
            </nav>
            </div>
        </header>
    )
}
export default Header