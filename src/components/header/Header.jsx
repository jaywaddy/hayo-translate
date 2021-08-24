import React from 'react';

// Styles
import { 
    CTAContainer, 
    HeaderContainer, 
    AppTitle
} from './HeaderStyles';

// Components
import DropDown from '../ctas/dropDown/DropDown';
import ToggleMenuCTA from '../ctas/toggleMenu/ToggleMenu';
import Menu from "../menu/Menu";

export default function Header({ actionTitle }) {
    const [toggle, setToggle] = React.useState(false);

    const toggleMenu = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <HeaderContainer>
            <AppTitle>Hayo Translate</AppTitle>
            <CTAContainer>
                <DropDown 
                title={actionTitle} 
                menuToggled={toggle}
                disabled={toggle}/>
                <ToggleMenuCTA 
                func={toggleMenu}
                isToggled={toggle} />
            </CTAContainer>
            <Menu toggle={toggle} />
        </HeaderContainer>
    );
}
