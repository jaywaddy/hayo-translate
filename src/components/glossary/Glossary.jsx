import React from "react";

// Components
import SearchBar from "../../components/ctas/searchBarCTA/SearchBar";
import EntryCard from "../../components/glossaryCard/GlossaryCard";

// Scripts
import Data from "../../helpers/scripts/data";

// Styles
import { GlossaryContainer } from "./GlossaryStyles";

export default function Glossary() {
    const [filteredCards, setFilteredCards] = React.useState([]);

	const filterCards = event => {
		const searchInput = event.target.value;
		const newFilter = Data.filter(entry => {
			return entry.eng.toLowerCase().includes(searchInput.toLowerCase());
		});

		searchInput === ""
			? setFilteredCards([])
			: setFilteredCards(newFilter);
	}

	const GlossaryOfCards = () => {
		return filteredCards.slice(0, 100).map((entry, key) => (
			<li key={ key }>
				<EntryCard 
				eng={ entry.eng }
				pos={ entry.pos }
				plc={ entry.plc }
				pro={ entry.pro } />
			</li>
		));
	}

    return (
        <>
		<SearchBar placeholder="Search..." func={ filterCards } />
		<GlossaryContainer>{
			filteredCards.length !== 0 && <GlossaryOfCards />
		}</GlossaryContainer>
		</>
    );
}
