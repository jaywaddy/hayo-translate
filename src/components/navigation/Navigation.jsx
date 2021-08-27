import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

//Styles 
import { 
    NavContainer,
    NavLinkContainer,
    Text
 } from './NavigationStyles';

// Assets
import TranslateIcon from '../../assets/icons/TranslateIcon';
import GlossaryIcon from '../../assets/icons/GlossaryIcon';

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);
    // const [activeLink, setActiveLink] = React.useState(true);

    const location = useLocation();

    const setPage = () => {
        setToggle(() => !toggle);
    }

    const NavText = () => {
        return location.pathname === "/"
        ? <Text>Translate</Text>
        : <Text>Glossary</Text>
    }

    return (
        <NavContainer>
            <NavLinkContainer>
                <NavLink 
                exact to="/"
                activeClassName="active-link"
                onClick={setPage}>
                    <TranslateIcon/>
                </NavLink> 
                <NavLink 
                exact to="/glossary"
                activeClassName="active-link"
                onClick={setPage}>
                    <GlossaryIcon />
                </NavLink>
            </NavLinkContainer>
            {/* {toggle 
            ? <NavText active />
            : <NavText />} */}
        </NavContainer>
    );
}
