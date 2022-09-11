import React from 'react';

export default function Toggle({ disabled }) {
    return (
        disabled
        ? <svg xmlns="http://www.w3.org/2000/svg" width="54" height="29" viewBox="0 0 54 29"><rect width="54" height="29" rx="14.5" fill="#969da3"/><circle cx="10.5" cy="10.5" r="10.5" transform="translate(5 4)" fill="#fff"/></svg>

        : <svg xmlns="http://www.w3.org/2000/svg" width="54" height="29" viewBox="0 0 54 29"><rect width="54" height="29" rx="14.5" fill="#0f7ddb"/><circle cx="10.5" cy="10.5" r="10.5" transform="translate(28 4)" fill="#fff"/></svg>
    );
}
