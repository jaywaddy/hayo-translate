import React from "react";

// Assets
import FavoriteIcon from "../../assets/icons/FavoriteIcon";

export default function FavoriteButton({ isFavorited, setIsFavorited }) {
    return (
        <button onClick={ () => setIsFavorited(isFavorited => !isFavorited) }>
            <FavoriteIcon toggle={ isFavorited }/>
        </button>
    );
}
