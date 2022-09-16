import React from "react";

// Styles
import { Button } from "./CopyCTAStyles";

export default function CopyCTA({ value }) {
    const copyToClipboard = target => {
        navigator.clipboard.writeText(target);
    }

    return (
        <Button onClick={ () => copyToClipboard(value) }>Copy</Button>
    );
}
