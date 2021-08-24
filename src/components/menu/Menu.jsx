import React from 'react';

// Styles
import { MenuContainer, MenuOptionsContainer } from './MenuStyles';

// Components
import MenuOption from '../menuOption/MenuOption';

export default function Menu({ toggle }) {
    return (
        <MenuContainer>
            { toggle && 
            <MenuOptionsContainer>
                <MenuOption title="Setting 1" />
                <MenuOption title="Setting 2" disabled />
                <MenuOption title="Setting 3" disabled />
            </MenuOptionsContainer> }
        </MenuContainer>
    );
}
