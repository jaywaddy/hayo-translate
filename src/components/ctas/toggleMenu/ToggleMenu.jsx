import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 45px;
    margin-right: 10px;

    cursor: pointer;
`;

export default function MenuButton (props) {
    const [toggle, setToggle] = React.useState(false);

    const ToggleMenu = () => setToggle(toggle => !toggle);

    const Icon = props => {
        return !props.toggleMenu ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(-74 -712.108)"><line x2="9" transform="translate(75.5 713.608)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="13" transform="translate(75.5 726.608)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="13" transform="translate(75.5 720.108)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></g></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="8.485" height="12.728" viewBox="0 0 8.485 12.728"><g transform="translate(234.63 383.242) rotate(180)"><g transform="translate(233.722 381.834) rotate(180)"><line y2="6" transform="translate(1.214 4.957) rotate(-45)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="6" transform="translate(1.214 4.957) rotate(-45)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></g></g></svg>;
    }

    return (
        <IconContainer 
        className="menu-icon component button"
        onClick={ToggleMenu}>
            <Icon toggleMenu={toggle}/>
        </IconContainer>
    );
}
