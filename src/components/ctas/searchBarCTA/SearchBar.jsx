import React from "react";

// Styles
import { SearchBarContainer, Input } from "./SearchBarStyles";

export default function SearchBar ({placeholder, func}) {
    return (
        <SearchBarContainer>
            <Input 
            type="text" 
            placeholder={placeholder}
            onChange={func} />
        </SearchBarContainer>
    );
}
