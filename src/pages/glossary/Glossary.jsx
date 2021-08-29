import React from 'react';

// SVGs
import ArrowIcon from "../../assets/icons/ArrowIcon";
import EntryCard from '../../components/glossaryCard/GlossaryCard';

// Scripts
import Data from '../../helpers/scripts/data';

// Styles
import {
	GlossaryContent,
	GlossaryContainer,
	DropDownContainer,
	LinksContainer,
	ListContainer,
	LetterSearch,
} from "./GlossaryStyles";

export default function Glossary() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const [active, setActive]  = React.useState(letters[0]);
	const [toggle, setToggle] = React.useState(false);
	
	// Items in dropdown menu
    // const ListItems = letters.map((letter, key) => (
    //     <li 
    //     className="drop-down"
    //     key={key}
    //     onClick={() => {
    //         setActive(letter); 
    //         setToggle(false);
	// 	}}>
    //         {letter}
    //     </li>
	// ));
	
	// Render dropdown menu
    // const List = () => toggle ? <ul>{ListItems}</ul> : null;

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