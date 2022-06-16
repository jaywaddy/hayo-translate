import React from 'react';
import { useLocation } from 'react-router';

// Constext
import { ActiveLetterContext } from '../../../helpers/contexts/ActiveLetterContext';
import { DropdownContext } from '../../../helpers/contexts/DropdownContext';

// Components
import DropDown from '../../dropDown/DropDown';

// Styles
import { DropDownContainer, CTAContainer, Title } from "./DropDownCTAStyles";

export default function DropDownCTA ({ menuToggled, disabled }) {
    const [toggleDropdown, setToggleDropdown] = React.useState(false);
    const {activeLetter} = React.useContext(ActiveLetterContext);
    const location = useLocation().pathname;

    const toggleDropdownMenu = () => {
        !menuToggled && setToggleDropdown(toggle => !toggle);
    }

    return (
        <DropdownContext.Provider value={{setToggleDropdown}}>
            <DropDownContainer>
                <CTAContainer 
                onClick={toggleDropdownMenu}
                disabled={disabled}>
                    <Title>{menuToggled 
                    ? "Settings" 
                    : location === "/"
                        ? "English"
                        : activeLetter
                    }</Title>
                </CTAContainer>
                {!menuToggled && toggleDropdown &&
                <DropDown activeLetter={activeLetter} />}
            </DropDownContainer>
        </DropdownContext.Provider>
    );
}
