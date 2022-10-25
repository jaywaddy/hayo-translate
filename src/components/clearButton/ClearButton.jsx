import React from "react";

// Assets
import ClearIcon from "../../assets/icons/ClearIcon";

export default function ClearButton({ setInput, clearHistoryEntry, cancel }) {
    const clearInput = () => {
        cancel
        ? clearHistoryEntry()
        : setInput("");
    }

    return (
        <button onClick={ clearInput }>
            <ClearIcon />
        </button>
    );
}
