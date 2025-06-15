
import { Link } from "react-router-dom"
function MainContent(){
    return(
        <div className="main-content"> 
            {/* <About/>
            <Internships/>
            <Projects/>
            <Certifications/> */}
            <img src="https://wallpapers.com/images/hd/pretty-profile-pictures-526voksmtgllopn4.jpg" alt="profile image" height="25%" width="20%" className="my-profile"></img>
            <h1 className="my-name">Akkireddi Hema</h1>
            <h4 className="my-profession">Student , Fresher</h4>
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
        </div>
    )
}
export default MainContent