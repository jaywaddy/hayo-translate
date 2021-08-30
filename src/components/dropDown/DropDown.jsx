import React from 'react';
import { useLocation } from 'react-router';

// Styles
import { DropDownContainer, Menu, MenuText } from './DropDownStyles';

export default function DropDown({ activeLetter }) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const location = useLocation().pathname;

    const [active, setActive] = React.useState(letters[0]); // Change defult state to be dynamic

    const generateMenu = (start, end) => {
        return letters.slice(start, end).map(letter => { 
            return (
                <MenuText 
                key={letter}
                onClick={() => setActive(letter)}>
                    {letter}
                </MenuText>
            );
        });
    }

    return (
        <DropDownContainer>
            {location === "/" && 
            <Menu>
                <MenuText>English</MenuText>
                <MenuText disabled>Spanish</MenuText>
                <MenuText disabled>German</MenuText>
            </Menu>}
            {location === "/glossary" &&
            <>
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
