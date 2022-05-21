import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () =>{
    return (
        <header>
            <div className="container row flex__space__between align__items__center">
                <Link to="/"><h1>Chris Rowe</h1></Link>
                <nav>
                    <Nav />
                </nav>
            </div>

        </header>
    );
};

export default Header;