import React from "react";

// Assets
import ClearIcon from "../../assets/icons/ClearIcon";

export default function ClearButton({ setInput }) {
    const clearInput = () => setInput("");

    return (
        <button onClick={ clearInput }>
            <ClearIcon />
        </button>
    );
}
