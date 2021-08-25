import React from 'react';
import { useLocation } from 'react-router';

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

export default function Header() {
    const location = useLocation();
    const [toggle, setToggle] = React.useState(false);
    const [language] = React.useState({
        eng: "English",
        plc: "Planco"
    });

    const toggleMenu = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <HeaderContainer>
            <AppTitle>Hayo Translate</AppTitle>
            <CTAContainer>
                <DropDownCTA 
                title={location.pathname === "/" ? language.eng : null} 
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
