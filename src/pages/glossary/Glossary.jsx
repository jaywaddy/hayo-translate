import React from 'react';

// Styles
import { GlossaryContainer } from "./GlossaryStyles";

// Components
import EntryCard from '../../components/glossaryCard/GlossaryCard';

// Scripts
import Data from '../../helpers/scripts/data';

export default function Glossary() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const [active, setActive]  = React.useState(letters[0]);

	// Render glossary cards
	const RenderContent = () => {
		let cards = [];

		Data.map((entry, key) => {
			return entry.eng.charAt(0) === active && cards.push(
				<li key={key}>
					<EntryCard 
					eng={entry.eng}
					pos={entry.pos}
					plc={entry.plc}
					pro={entry.pro} />
				</li>
			);
		});

		return <GlossaryContainer>{cards}</GlossaryContainer>
	}

	return (
		<RenderContent />
	);
}