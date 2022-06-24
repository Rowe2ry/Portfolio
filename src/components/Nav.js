import { Link } from "react-router-dom";

const Nav = ({ page, handleNavClick }) => {

    return (
        <ul className="row nav__list align__items__center">
            <li className={page === 'About' ? 'active' : ''}><Link to="/about" onClick={() => handleNavClick('About')}>About Me</Link></li>
            <li className={page === 'Portfolio' ? 'active' : ''}><Link to="/work" onClick={() => handleNavClick('Portfolio')}>Portfolio</Link></li>
            <li className={page === 'Contact' ? 'active' : ''}><Link to="/contact" onClick={() => handleNavClick('Contact')}>Contact Me</Link></li>
            <li className={page === 'Resume' ? 'active' : ''}><Link to="/resume" onClick={() => handleNavClick('Resume')}>Resume</Link></li>
        </ul>
    );
};

export default Nav;