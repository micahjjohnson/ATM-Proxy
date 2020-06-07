import styled from 'styled-components';
import {mainColor} from "../../config/SiteColors";

export const HeaderGridContainer = styled.div `
    height: 48px!important;
    margin: auto;
    padding: 8px;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr .80fr;
    background-color: ${mainColor};
`;

export const HomeHeaderGridContainer = styled.div `
    height: 48px!important;
    margin: auto;
    padding: 8px;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr .80fr;
    position: absolute;
    top: 0;
    width: 97%;
`;

export const NavOptionContainer = styled.div `
    margin: auto;
`;

export const NavOptionLink = styled.a `
    text-decoration: none;
    color: black;
`;