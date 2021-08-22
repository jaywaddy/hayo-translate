import React from 'react';

// SVGs
import ArrowIcon from "../../assets/icons/ArrowIcon";
import EntryCard from './components/EntryCard';

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

export default () => {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const [active, setActive]  = React.useState(letters[0]);
	const [toggle, setToggle] = React.useState(false);
	
	// Items in dropdown menu
    const ListItems = letters.map((letter, key) => (
        <li 
        className="drop-down"
        key={key}
        onClick={() => {
            setActive(letter); 
            setToggle(false);
		}}>
            {letter}
        </li>
	));
	
	// Render dropdown menu
    const List = () => toggle ? <ul>{ListItems}</ul> : null;

	// Render glossary cards
	const RenderContent = () => {
		let cards = [];

		Data.map((entry, key) => {
			return entry.eng.charAt(0) === active ?
				cards.push(
					<li key={key}>
						<EntryCard 
						eng={entry.eng}
						pos={entry.pos}
						plc={entry.plc}
						pro={entry.pro}
						/>
					</li>
				)
				: null;
		});

		return <ul>{cards}</ul>
	}

	return (
		<>
			<DropDownContainer>
				<div className="component">
					<p className="active-letter">{active}</p>
					<button className="cta" onClick={() => setToggle(toggle => !toggle)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="13.56" height="9.805" viewBox="0 0 13.56 9.805"><g transform="translate(383.947 -226.03) rotate(90)"><g transform="translate(233.722 381.834) rotate(180)"><line y1="4.671" x2="5.579" transform="translate(0 0)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="5.579" y2="4.663" transform="translate(0 4.671)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></g></g></svg>
					</button>
				</div>
				<ListContainer>
					<List/>
				</ListContainer>
            </DropDownContainer>
			<GlossaryContainer className="glossary-page-content">
				<LetterSearch className="letter-search component"/>
				<GlossaryContent>
					<RenderContent className="glossary-content"/>
					<LinksContainer>
						<div className="component">
							<div className="list-item">
								<span>About Hayo</span>
								<button className="cta">
									<ArrowIcon/>
								</button>
							</div>
						</div>
						<div className="component">
							<div className="list-item">
								<span>Official Planco site</span>
								<button className="cta">
									<ArrowIcon/>
								</button>
							</div>
						</div>
					</LinksContainer>
				</GlossaryContent>
			</GlossaryContainer>
		</>
	);
}