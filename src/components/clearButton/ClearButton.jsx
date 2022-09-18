import React from "react";

// Assets
import ClearIcon from "../../assets/icons/ClearIcon";

export default function ClearButton({ clearInput }) {
    return (
        <button onClick={ clearInput }>
            <ClearIcon />
        </button>
    );
}
