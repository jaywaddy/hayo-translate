import React from 'react';
import { useLocation } from 'react-router';

// Context
import { ActiveLetterContext } from '../../helpers/contexts/ActiveLetterContext';
import { DropdownContext } from '../../helpers/contexts/DropdownContext';

// Styles
import { DropDownContainer, Menu, MenuText } from './DropDownStyles';

export default function DropDown() {
    const location = useLocation().pathname;

    const {activeLetter, setActiveLetter, letters} = React.useContext(ActiveLetterContext);
    const { setToggleDropdown } = React.useContext(DropdownContext);

    const handleOnClick = (letter) => {
        setActiveLetter(letter);
        setToggleDropdown(() => false)
    }

    const generateMenu = (start, end) => {
        return letters.slice(start, end).map(letter => { 
            return (
                <MenuText 
                onClick={() => handleOnClick(letter)}
                key={letter}
                active={() => letter === activeLetter}>
                    {letter}
                </MenuText>
            );
        });
    }

    return (
        <DropDownContainer>
            {location === "/"
            ? <Menu>
                <MenuText>English</MenuText>
                <MenuText disabled>Spanish</MenuText>
                <MenuText disabled>German</MenuText>
            </Menu>
           
            : <>
                <Menu>
                    {generateMenu(letters[0], letters.length / 2)}
                </Menu>
                <Menu>
                    {generateMenu(letters.length / 2, letters.length)}
                </Menu>
            </>}
        </DropDownContainer>
    );
}
