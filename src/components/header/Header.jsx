import React from 'react';

// Styles
import { 
    CTAContainer, 
    HeaderContainer, 
    AppTitle
} from './HeaderStyles';

// Components
import DropDownCTA from '../ctas/dropDownCTA/DropDownCTA';
import ToggleMenuCTA from '../ctas/toggleMenuCTA/ToggleMenuCTA';
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
                <DropDownCTA 
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
