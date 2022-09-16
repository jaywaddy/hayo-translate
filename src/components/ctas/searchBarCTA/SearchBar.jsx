import React from "react";

// Styles
import { Input } from "../../../helpers/styles/GlobalStyle";
import { SearchBarContainer as Container } from "./SearchBarStyles";

export default function SearchBar ({placeholder, func}) {
    return (
        <Container>
            <Input 
            type="text" 
            placeholder={placeholder}
            rows="1"
            onChange={func} />
        </Container>
    );
}
