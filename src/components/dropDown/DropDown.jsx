import React from 'react';

// Styles
import { DropDownContainer } from './DropDownStyles';


export default function DropDown({ translate }) {
    return (
        <DropDownContainer>
            { translate
                ?
                    <>
                        <span>English</span>
                        <span disabled>Planco</span>
                    </>
                : 
                    <>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                    </>
            }
        </DropDownContainer>
    );
}
