import React from 'react';

// Styles
import { MenuOptionContainer, MenuOptionTitle } from './MenuOptionStyles'

// Components
import ToggleMenuOption from '../toggleMenuOption/ToggleMenuOption';

export default function MenuOption({ title, disabled }) {
    return (
        <MenuOptionContainer disabled={disabled}>
            <MenuOptionTitle>{title}</MenuOptionTitle>
            <ToggleMenuOption />
        </MenuOptionContainer>
    );
}

