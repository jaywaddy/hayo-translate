import React from 'react';

// Context
import { ActiveLetterContext } from '../../helpers/contexts/ActiveLetterContext';

// Styles
import { GlossaryContainer } from "./GlossaryStyles";

// Components
import EntryCard from '../../components/glossaryCard/GlossaryCard';

// Scripts
import Data from '../../helpers/scripts/data';

export default function Glossary() {
	const { activeLetter } = React.useContext(ActiveLetterContext);

	const RenderContent = () => {
		let cards = [];

		Data.map((entry, key) => {
			return entry.eng.charAt(0) === activeLetter && cards.push(
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