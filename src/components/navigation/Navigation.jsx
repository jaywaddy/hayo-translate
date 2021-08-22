import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles 
import { Navbar } from './NavigationStyles';

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);

    const setToTranslate = () => {
        return !toggle ?  null : setToggle(() => false);
    }

    const setToGlossary = () => {
        return toggle ? null : setToggle(() => true);
    }

    return (
        <>
        <nav>
            <Navbar className="component">
                <NavLink 
                exact
                to="/"
                activeClassName="active-link"
                onClick={setToTranslate}>
                    <li className="nav-translate">Translate</li>
                </NavLink> 
                <NavLink 
                exact
                to="/glossary"
                activeClassName="active-link"
                onClick={setToGlossary}>
                    <li className="nav-glossary">Glossary</li>
                </NavLink>
            </Navbar>
        </nav>
        </>
    );
}
