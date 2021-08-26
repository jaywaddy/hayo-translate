import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles 
import { Navbar, Link } from './NavigationStyles';

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);

    const setToTranslate = () => toggle && setToggle(() => false);

    const setToGlossary = () => !toggle && setToggle(() => true);

    return (
        <Navbar>
            <NavLink 
            exact
            to="/"
            activeClassName="active-link"
            onClick={setToTranslate}>
                <Link className="nav-translate">Translate</Link>
            </NavLink> 
            <NavLink 
            exact
            to="/glossary"
            activeClassName="active-link"
            onClick={setToGlossary}>
                <Link className="nav-glossary">Glossary</Link>
            </NavLink>
        </Navbar>
);
}
