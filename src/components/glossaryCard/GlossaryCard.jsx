import React from "react";

// Styles
import { 
    Divider,
    CardHeader as Header
} from "./GlossaryCardStyles";

import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";

// Assets
import FavoriteButton from "../favoriteButton/FavoriteButton";

export default function EntryCard({ eng, pos, pro, plc }) {
    const [isFavorited, setIsFavorited] = React.useState(false);
    const englishRef = React.useRef();
    const plancoRef = React.useRef();
    const posRef = React.useRef();
    const proRef = React.useRef();

    const setAsFavorite = () => {
        // Push data into Local Storage
        console.log(englishRef.current.innerText, plancoRef.current.innerText);
    }

    React.useEffect(() => {
        isFavorited && setAsFavorite();
    }, [isFavorited]);

    return (
        <Container>
            <div>
                <Header>
                    <p ref={ englishRef }>{ eng }</p>
                    <FavoriteButton
                    isFavorited={ isFavorited }
                    setIsFavorited={ setIsFavorited }/>
                </Header>
                <em ref={ posRef }>{ pos }</em>
            </div>
            <Divider />
            <div>
                <p ref={ plancoRef }>{ plc }</p>
                <em ref={ proRef }>{ pro }</em>
            </div>
        </Container>
    );
}
