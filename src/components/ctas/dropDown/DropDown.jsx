import React from 'react';

// Styles
import { Container } from "./DropDownStyles";

export default function DropDown ({ title, menuToggled, disabled }) {
    return (
        <Container disabled={disabled}>{menuToggled ? "Settings" : title}</Container>
    );
}
