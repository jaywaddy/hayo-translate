import React from "react";

// Styles
import { Input } from "../../helpers/styles/GlobalStyle";
import { SearchBarContainer as Container } from "./SearchBarStyles";

// Assets
import SearchIcon from "../../assets/icons/SearchIcon"; 
import ClearButton from "../clearButton/ClearButton";

export default function SearchBar({ placeholder, func }) {
    return (
        <Container>
            <SearchIcon gridArea="search-icon"/>
            <Input 
            gridArea="input"
            type="text" 
            placeholder={ placeholder }
            rows="1"
            onChange={ func } />
            <ClearButton func={ func }/>
        </Container>
    );
}
