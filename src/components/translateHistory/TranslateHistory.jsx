import React from "react";

// Components
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import CancelButtonCTA from "../ctas/cancelButtonCTA/CancelButtonCTA";
import CopyCTA from "../ctas/copyCTA/CopyCTA";

// Styles
import { 
    HistoryInfo,
    TimeStamp,
    EnglishText,
    PlancoText,
    FavoriteToggle
 } from "./TranslateHistoryStyles";
import {
    ContentContainer as Container,
    ContentWrapper as Wrapper,
    ContentHeader as Header,
    ContentFooter as Footer
} from "../../helpers/styles/GlobalStyle";

export default function TranslateHistory({ timeStamp, english, planco }) {
    return (
        <>
        <Container>
            <Wrapper>
                <Header>
                    <HistoryInfo>
                        <TimeStamp>{ timeStamp + " sec ago" }</TimeStamp>
                        <FavoriteIcon toggle={ true }/>
                    </HistoryInfo>
                    <CancelButtonCTA />
                </Header>
                    <EnglishText>{ english }</EnglishText>
                    <PlancoText>{ planco }</PlancoText>
                <Footer>
                    <CopyCTA value={ planco }/>
                    <FavoriteToggle>Unfavorite</FavoriteToggle>
                </Footer>
            </Wrapper>
        </Container>
        </>
    );
}
