import { Link } from "react-router-dom";
import resume from '../assets/pdf/ChrisRoweResume_May_2022.pdf';

const Nav = () => {

    return (
        <ul className="row nav__list align__items__center">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/work">My Work</Link></li>
            <li><a href={resume}>My Resume</a></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </ul>
    );
};

export default Nav;