import React from 'react';

export default function MenuIcon({ isToggled }) {
    return (
        !isToggled  
            ? <svg xmlns="http://www.w3.org/2000/svg" width="15.055" height="13" viewBox="0 0 15.055 13"><g transform="translate(6.36 4)"><line x2="12.055" transform="translate(-4.86 2.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/><line x2="12.055" transform="translate(-4.86 7.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/><line x2="12.055" transform="translate(-4.86 -2.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/></g></svg>
            
            : <svg xmlns="http://www.w3.org/2000/svg" width="14.243" height="15.621" viewBox="0 0 14.243 15.621"><g transform="translate(6.165 4.621)"><line y1="10" x2="10" transform="translate(-4.043 -2.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/><line y2="12" transform="translate(0.957 -2.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3" opacity="0"/><line x2="10" y2="10" transform="translate(-4.043 -2.5)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/></g></svg>
    );
}
