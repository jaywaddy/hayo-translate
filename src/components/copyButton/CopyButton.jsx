import React from "react";

export default function CopyCTA({ value }) {
    const copyToClipboard = target => {
        navigator.clipboard.writeText(target);
    }

    return (
        <button onClick={ () => copyToClipboard(value) }>Copy</button>
    );
}
