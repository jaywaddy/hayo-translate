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
    const location = useLocation().pathname;

    const {activeLetter} = React.useContext(ActiveLetterContext);

    const toggleDropDown = () => {
        !menuToggled && setToggleDropdown(toggle => !toggle);
    }

    return (
        <DropdownContext.Provider value={{setToggleDropdown}}>
            <DropDownContainer>
                <CTAContainer 
                onClick={toggleDropDown}
                disabled={disabled}>
                    <Title>
                    {menuToggled 
                        ? "Settings" 
                        : location === "/"
                            ? "English"
                            : activeLetter
                    }
                    </Title>
                </CTAContainer>
                {!menuToggled & toggleDropdown ? <DropDown activeLetter={activeLetter} /> : null}
            </DropDownContainer>
        </DropdownContext.Provider>
    );
}
