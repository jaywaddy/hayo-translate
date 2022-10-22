import React from "react";
import { NavLink } from "react-router-dom";

//Styles 
import { 
    NavContainer,
    NavLinkContainer
 } from "./NavigationStyles";

// Assets
import TranslateIcon from "../../assets/icons/TranslateIcon";
import GlossaryIcon from "../../assets/icons/GlossaryIcon";

export default function Navigation() {
    return (
        <NavContainer>
            <NavLinkContainer>
                <li>
                    <NavLink 
                    exact to="/"
                    activeClassName="active-link">
                        <TranslateIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact to="/glossary"
                    activeClassName="active-link">
                        <GlossaryIcon />
                    </NavLink>
                </li>
            </NavLinkContainer>
        </NavContainer>
    );
}
