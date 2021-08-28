import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

//Styles 
import { 
    NavContainer,
    NavLinkContainer,
    PageIndicator
 } from './NavigationStyles';

// Assets
import TranslateIcon from '../../assets/icons/TranslateIcon';
import GlossaryIcon from '../../assets/icons/GlossaryIcon';

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);
    const location = useLocation();

    const setPage = () => location.pathname === "/" ? setToggle(false) : setToggle(true);

    React.useEffect(() => setPage());

    return (
        <NavContainer>
            <NavLinkContainer>
                <NavLink 
                exact to="/"
                activeClassName="active-link"
                onClick={setPage}>
                    <TranslateIcon />
                </NavLink> 
                <NavLink 
                exact to="/glossary"
                activeClassName="active-link"
                onClick={setPage}>
                    <GlossaryIcon />
                </NavLink>
                <PageIndicator page={toggle} />
            </NavLinkContainer>
        </NavContainer>
    );
}
