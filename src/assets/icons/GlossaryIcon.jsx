import React from "react";

// Styles
import { style } from "../../helpers/styles/GlobalStyle";

export default function GlossaryIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="9.44444" height="9.44444" rx="3.5" stroke={ style.color.disabled } strokeWidth="3"/>
        <rect x="1.5" y="17.0555" width="9.44444" height="9.44444" rx="3.5" stroke={ style.color.disabled } strokeWidth="3"/>
        <rect x="17.0555" y="1.5" width="9.44444" height="9.44444" rx="3.5" stroke={ style.color.disabled } strokeWidth="3"/>
        <rect x="17.0555" y="17.0555" width="9.44444" height="9.44444" rx="3.5" stroke={ style.color.disabled } strokeWidth="3"/>
        </svg>
    );
}
