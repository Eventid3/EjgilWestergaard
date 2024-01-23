import { Link } from "react-router-dom";
import dropbtn from "/img/dropdown.png"

function Nav() {
    return <nav>
        <ul>
            {/* desktop nav */}
            <li><Link to="">E J G I L &nbsp; W E S T E R G A A R D</Link></li>
            <li className="mob-hide right"><Link to="kontakt">Kontakt</Link></li>
            <li className="mob-hide right"><Link to="om">Om</Link></li>
            <li className="mob-hide right"><Link to="foto">Foto</Link></li>
            <li className="mob-hide right"><Link to="avisudklip">Avisudklip</Link></li>
            <li className="mob-hide right"><Link to="cv">CV</Link></li>
            <li className="mob-hide right"><Link to="video">Video</Link></li>
            <li className="mob-hide right"><Link to="skulpturer">Skulpturer</Link></li>

            {/* mobile nav */}
            <li class="mob-dropdown right">
                <Link to="javascript:void(0)" className="mob-dropbtn"><img src={dropbtn} width="30px" className="dropdownlogo"></img></Link>
                <div className="mob-dropdown-content">
                    <Link to="skulpturer">Skulpturer</Link>
                    <Link to="video">Video</Link>
                    <Link to="cv">CV</Link>
                    <Link to="avisudklip">Avisudklip</Link>
                    <Link to="foto">Foto</Link>
                    <Link to="om">Om</Link>
                    <Link to="kontakt">Kontakt</Link>
                </div>
            </li>
        </ul>
    </nav>
}

export default Nav
