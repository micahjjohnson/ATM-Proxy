import styled from 'styled-components';
import {mainColor} from "../../config/SiteColors";

export const FooterContainer = styled.div `
    background-color: ${mainColor};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // bottom: 0;
    // position: absolute;
    // width: 100%;
    box-sizing: border-box;
`;

export const cardLogoImg = {
    width: '240px'
};