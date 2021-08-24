import React from 'react';

// Styles
import { MenuIconContainer, MenuContainer } from "./ToggleMenuStyles";

// Components
import Icon from "../../../assets/icons/MenuIcon";
import MainAction from '../mainAction/MainAction';

export default function ToggleMenu ({ isToggled }) {
    const [toggle, setToggle] = React.useState(false);

    const setToggleState = () => setToggle(toggle => !toggle);

    const MenuIcon = props => {
        return !toggle ?
            <Icon isToggled={false} /> :
            <Icon isToggled={true} />;
    }

    return (
        <>
            <MenuIconContainer 
            onClick={setToggleState}
            isToggled={toggle}>
                <MenuIcon />
            </MenuIconContainer>
            <MenuContainer>
                <MainAction title="test" />
            </MenuContainer>
        </>
    );
}
