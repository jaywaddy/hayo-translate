import React from 'react';

// Styles
import { HeaderContainer } from './HeaderStyles';

// Components
import MenuButton from "../ctas/toggleMenu/ToggleMenu"
import SearchBar from '../components/SearchBar';

export default function Header() {
    return (
        <HeaderContainer className="header">
            <MenuButton/>
            <SearchBar/>
        </HeaderContainer>
    );
}
