import React from 'react';
import DropDown from '../../dropDown/DropDown';

// Styles
import { DropDownContainer, CTAContainer, Title } from "./DropDownCTAStyles";

export default function DropDownCTA ({ title, menuToggled, disabled }) {
    const [toggle, setToggle] = React.useState(false);

    const toggleDropDown = () => {
        !menuToggled && setToggle(toggle => !toggle);
    }

    return (
        <DropDownContainer>
            <CTAContainer 
            onClick={toggleDropDown}
            disabled={disabled}>
                <Title>{menuToggled ? "Settings" : title}</Title>
            </CTAContainer>
            {!menuToggled & toggle ? <DropDown translate/> : null}
        </DropDownContainer>
    );
}
