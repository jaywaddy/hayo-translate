import React from 'react';

// Styles
import { CTAContainer, HeaderContainer } from './HeaderStyles';

// Components
import MainAction from '../ctas/mainAction/MainAction';
import ToggleMenu from '../ctas/toggleMenu/ToggleMenu';

export default function Header({ actionTitle }) {
    return (
        <HeaderContainer>
            <p>Hayo</p>
            <CTAContainer>
                <MainAction title={actionTitle} />
                <ToggleMenu isToggled={false} />
            </CTAContainer>
        </HeaderContainer>
    );
}
