const Footer = () => {
    return (
        <footer>
            <div className="container row flex__space__between align__items__center">
                <p className="copywrite">Created by Chris Rowe — 2022©</p>
                <ul className="row nav__list align__items__center desktop">
                    <li><p className="copywrite">Network with me!</p></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/rowe2ry/" rel="noreferrer">LinkedIn</a></li>
                    <li><a target="_blank" href="https://github.com/Rowe2ry/" rel="noreferrer">GitHub</a></li>
                    <li><a target="_blank" href="https://www.facebook.com/rowe2ry/" rel="noreferrer">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;