import React from "react";

// Assets
import ClearIcon from "../../assets/icons/ClearIcon";

export default ({ func }) => {
    return (
        <button onClick={ func }>
            <ClearIcon />
        </button>
    );
}
