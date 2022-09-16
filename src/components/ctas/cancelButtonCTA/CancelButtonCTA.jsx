import React from "react";

// Styles
import { global } from "../../../helpers/styles/GlobalStyle";

export default function CancelButton({ func }) {
    return (
        <button onClick={ func }>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.242" height="14.243" viewBox="0 0 14.242 14.243"><g transform="translate(5.665 4.121)"><line y1="10" x2="10" transform="translate(-3.543 -2)" fill="none" stroke={ global.color.black } strokeLinecap="round" strokeWidth="3"/><line x2="10" y2="10" transform="translate(-3.543 -2)" fill="none" stroke={ global.color.black } strokeLinecap="round" strokeWidth="3"/></g></svg>
        </button>
    );
}
