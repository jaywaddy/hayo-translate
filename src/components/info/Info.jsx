import React from 'react';

// Styles
import { global } from "../../helpers/styles/GlobalStyle";
import { InfoContainer, Text } from "./InfoStyles";

export default function Info() {
    return (
        <InfoContainer>
            <Text>Planco is the official language of Planet Coaster and 
            Planet Zoo, created by Frontier Development plc.</Text>
            <Text>Planet Coaster is a registered trademark of Frontier 
            Developments plc. All images included on this site 
            belong to Frontier Developments plc. We’re in no way 
            affiliated or partnered with Frontier. Planco, is 
            developed by Frontier Developments plc.</Text>
            <Text>Hayo Translate © 2019 - 2021 by Jay Waddy.</Text>
            <Text>Ver {global.version}</Text>
        </InfoContainer>
    );
}
