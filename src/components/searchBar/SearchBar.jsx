import React from "react";

// Styles
import { Input } from "../../helpers/styles/GlobalStyle";
import { SearchBarContainer as Container } from "./SearchBarStyles";

// Assets
import SearchIcon from "../../assets/icons/SearchIcon"; 
import ClearButton from "../clearButton/ClearButton";

// Scripts
import Data from "../../helpers/scripts/data";

export default function SearchBar({ setFilteredCards }) {    
	const [input, setInput] = React.useState("");
    const inputRef = React.useRef();

	React.useEffect(() => {
		handleCardFliter();
	}, [input]);

	const handleCardFliter = () => {
		setInput(inputRef.current.value);
		const entryArray = Data.filter(entry => {
			return entry.eng.toLowerCase().includes(input.toLowerCase());
		});

		input === "" 
            ? setFilteredCards([])
            : setFilteredCards(entryArray)
	}

    const clearInput = () => {
        setInput("");
    }

    return (
        <Container>
            <SearchIcon />
            <Input
            ref={ inputRef }
            type="text" 
            placeholder="Search..."
            rows="1"
            value={ input }
            onChange={ handleCardFliter }/>
            <ClearButton 
            clearInput={ clearInput }/>
        </Container>
    );
}
