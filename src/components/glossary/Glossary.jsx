import React from "react";

// Components
import SearchBar from "../../components/searchBar/SearchBar";
import EntryCard from "../../components/glossaryCard/GlossaryCard";

// Styles
import { GlossaryContainer } from "./GlossaryStyles";

export default function Glossary() {
    const [filteredCards, setFilteredCards] = React.useState([]);

	const GlossaryOfCards = () => {
		return filteredCards.slice(0, 100).map((entry, key) => (
			<li key={ key }>
				<EntryCard
				eng={ entry.eng }
				pos={ entry.pos }
				plc={ entry.plc }
				pro={ entry.pro }/>
			</li>
		));
	}

    return (
        <>
		<SearchBar setFilteredCards={ setFilteredCards }/>
		<GlossaryContainer>
			{ filteredCards.length !== 0 && <GlossaryOfCards /> }
		</GlossaryContainer>
		</>
    );
}
