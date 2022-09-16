import React from "react";

// Styles
import { MenuOptionContainer } from "./MenuOptionStyles"

// Icons
import ToggleIcon from "../../assets/icons/ToggleIcon";

export default function MenuOption({ title, disabled }) {
    const [toggle, setToggle] = React.useState(false);

    const toggleMenuOption = () => !disabled && setToggle(toggle => !toggle);

    return (
        <MenuOptionContainer disabled={disabled} onClick={toggleMenuOption}>
            <span>{title}</span>
            <ToggleIcon toggled={toggle} />
        </MenuOptionContainer>
    );
}

