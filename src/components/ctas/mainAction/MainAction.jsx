import React from 'react';

// Styles
import { Container } from "./MainActionStyles";

export default function MainAction({title, dropdown}) {
    return (
        <Container>{title}</Container>
    );
}
