import React from "react";

// Components
import EntryCard from "../../components/glossaryCard/GlossaryCard";

// Styles
import { GlossaryContainer as Container } from "./GlossaryStyles";

export default function Glossary({ filteredCards }) {
	const DisplayCards = () => {
		return filteredCards.length !== 0  
		&& filteredCards.slice(0, 100).map((entry, key) => (
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
		<Container>
			<DisplayCards />
		</Container>
    );
}
