import React from 'react';

// Styles
import { MenuIconContainer, MenuContainer } from "./ToggleMenuStyles";

// Components
import Icon from "../../../assets/icons/MenuIcon";
import Menu from "../../menu/Menu";

export default function ToggleMenu ({ isToggled }) {
    const [toggle, setToggle] = React.useState(false);

    const setToggleState = () => setToggle(toggle => !toggle);

    const MenuIcon = function() {
        return !toggle 
            ? <Icon isToggled={false} />
            : <Icon isToggled={true} />;
    }

    const ShowMenu = function() {
        return toggle 
            ? <Menu />
            : null
    }

    return (
        <>
            <MenuIconContainer 
            onClick={setToggleState}
            isToggled={toggle}>
                <MenuIcon />
            </MenuIconContainer>
            <MenuContainer>
                <ShowMenu />
            </MenuContainer>
        </>
    );
}
