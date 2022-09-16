import React from "react";

// Styles
import { style } from "../../../helpers/styles/GlobalStyle";

export default function CancelButton({ func }) {
    return (
        <button onClick={ func }>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14.242 14.243"><g transform="translate(5.665 4.121)"><line y1="10" x2="10" transform="translate(-3.543 -2)" fill="none" stroke={ style.color.black } strokeLinecap="round" strokeWidth="3"/><line x2="10" y2="10" transform="translate(-3.543 -2)" fill="none" stroke={ style.color.black } strokeLinecap="round" strokeWidth="3"/></g></svg>
        </button>
    );
}
