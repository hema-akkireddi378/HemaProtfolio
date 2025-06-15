import {Link} from "react-router-dom"
function Footer(){
    return(
        <div className="footer-elements">
            <div className="role">
                <p>Akkireddi Hema</p>
                
            </div>
            <div className="contact-info">
              <Link to="akkireddihema180@gmail.com" className="contact-details">Email: akkireddihema180@gmail.com</Link>
              <Link to="6303675398" className="contact-details">Phone: 6303675308</Link>
              <p className="location">Visakhaptnam, Andhra Pradesh</p>
            </div>
        
            <div>
                <ul className="footer-details">
                    <li><Link to="/About" className="my-footer-details">About Me</Link></li>
                    <li><Link to="/Internships" className="my-footer-details">Internships</Link></li>
                    <li><Link to="/Projects" className="my-footer-details">Projects</Link></li>
                    <li><Link to="Certifications" className="my-footer-details">Certifications</Link></li>
                </ul>
            </div>
             <div className="social-media">
                <Link to="https://github.com/hema-akkireddi378" >
                <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=1A1A1A" alt="git hub profile image" className="social-media-links" height="50%" width="40%"></img>
                </Link>
                <Link to="https://www.linkedin.com/in/hema-akkireddi-862644272/" >
                <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=1A1A1A" className="social-media-links"   height="50%" width="40%"></img>
                </Link>
                <Link to="https://www.hackerrank.com/profile/akkireddihema" >
                <img src="https://img.icons8.com/?size=100&id=iRVanPLYT6lT&format=png&color=1A1A1A" className="social-media-links"  height="50%" width="40%"></img>
                </Link>
                <Link to="https://leetcode.com/u/AKKIREDDI_HEMA/" >
                <img src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=1A1A1A" alt="Leet Code" className="social-media-links" height="50%" width="40%"></img>
                </Link>
                <Link to="akkireddihema180@gmail.com">
                <img src="https://img.icons8.com/?size=100&id=8hI2F6VeSGwK&format=png&color=1A1A1A" alt="gmail" className="social-media-links" height="50%" width="40%"></img>
                </Link>
            </div>
            <div className="copyrights">
                <p>&copy; 2025 Akkireddi Hema.</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer