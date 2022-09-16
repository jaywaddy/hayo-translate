import React from "react";

// Styles
import { MenuIconContainer } from "./ToggleMenuCTAStyles";

// Components
import Icon from "../../../assets/icons/MenuIcon";

export default function ToggleMenu ({ func, isToggled }) {

    const MenuIcon = () => {
        return isToggled 
            ? <Icon isToggled={true} />
            : <Icon isToggled={false} />;
    }

    return (
        <MenuIconContainer onClick={func}>
            <MenuIcon />
        </MenuIconContainer>
    );
}
