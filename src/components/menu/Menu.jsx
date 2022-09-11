import React from 'react';

// Styles
import { MenuContainer, MenuOptionsContainer } from './MenuStyles';

// Components
import MenuOption from '../menuOption/MenuOption';
import Info from "../info/Info";
import ExternalLink from "../ctas/externalLinkCTA/ExternalLinkCTA";

export default function Menu({ toggle }) {
    return (
        <MenuContainer>
            { toggle && <>
            <MenuOptionsContainer>
                <MenuOption title="Dark Mode" disabled/>
            </MenuOptionsContainer>
            <Info />
            <ExternalLink text="More from Jay Waddy" /></>}
        </MenuContainer>
    );
}
