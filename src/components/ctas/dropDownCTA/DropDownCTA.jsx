import React from 'react';
import DropDown from '../../dropDown/DropDown';

// Styles
import { DropDownContainer, CTAContainer } from "./DropDownCTAStyles";

export default function DropDownCTA ({ title, menuToggled, disabled }) {
    const [toggle, setToggle] = React.useState(false);

    const toggleDropDown = () => {
        !menuToggled && setToggle(toggle => !toggle);
    }

    const ShowDropDown = () => !menuToggled & toggle ? <DropDown translate/> : null;

    const ShowCTATitle = () => menuToggled ? "Settings" : title;

    return (
        <DropDownContainer>
            <CTAContainer 
            onClick={toggleDropDown}
            disabled={disabled}>
                <ShowCTATitle />
            </CTAContainer>
            <ShowDropDown />
        </DropDownContainer>
    );
}
