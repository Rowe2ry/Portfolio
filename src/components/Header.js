import { useState } from 'react';
import Nav from './Nav';

const Header = () =>{

    const [page,setPage] = useState('About')
    const handleNavClick = (page) => setPage(page);

    return (
        <header>
            <div className="container row flex__space__between align__items__center">
                <h1>Chris Rowe</h1>
                <nav>
                    <Nav page={page} handleNavClick={handleNavClick}/>
                </nav>
            </div>

        </header>
    );
};

export default Header;