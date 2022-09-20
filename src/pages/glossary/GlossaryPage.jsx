import React from "react";

// Styles
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";

// Components
import Glossary from "../../components/glossary/Glossary";
import SearchBar from "../../components/searchBar/SearchBar";

export default function GlossaryPage() {
    const [filteredCards, setFilteredCards] = React.useState([]);

	const DisplayEmptySearchMessage = () => {
		return filteredCards.length === 0 && (
			<Container>
				<span>Seach by letter or word.</span>
			</Container>
		);
	}

	return (
		<>
		<SearchBar setFilteredCards={ setFilteredCards }/>
		<DisplayEmptySearchMessage />
		<Glossary filteredCards={ filteredCards }/>
		</>
	);
}