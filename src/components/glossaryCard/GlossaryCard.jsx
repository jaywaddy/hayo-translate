import React from 'react';

// Styles
import {
    CardContainer,
    EnglishInfo,
    PlancoInfo
} from "./styles/EntryCardStyles";

export default function EntryCard(props) {
    const [toggle, setToggle] = React.useState(false);

    const RevealInfo = (props) => {
        return toggle ?
            <PlancoInfo className="more-info">
                <p className="light">{props.plc}</p>
                <em>{props.pro}</em>
            </PlancoInfo> 
            : null;
    }

    return (
        <CardContainer className="component glossary-card-content" onClick={() => setToggle(toggle => !toggle)}>
            <div className="content">
                <EnglishInfo>
                    <p>{props.eng}</p>
                    <em>{props.pos}</em>
                </EnglishInfo>
                <RevealInfo show={toggle} plc={props.plc} pro={props.pro}/>
            </div>
        </CardContainer>
    );
}
