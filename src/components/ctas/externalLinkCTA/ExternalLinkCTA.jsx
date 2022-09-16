import React from "react";

// Styles
import { ExternalLinkContainer, LinkText } from "./ExternalLinkCTAStyles";

export default function ExternalLinkCTA({ text }) {
    return (
        <ExternalLinkContainer href="https://github.com/JayWaddy">
            <LinkText>{text}</LinkText>
            <svg xmlns="http://www.w3.org/2000/svg" width="15.314" height="15.314" viewBox="0 0 15.314 15.314"><g transform="translate(7.971 2.314) rotate(45)"><line y1="8" x2="8" transform="translate(-0.444)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/><line x2="8" y2="8" transform="translate(-0.444)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/></g></svg>
        </ExternalLinkContainer>
    );
}
