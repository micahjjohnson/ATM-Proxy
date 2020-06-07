import styled from 'styled-components';
import {accentColorDark, accentColorLight, darkBrown} from "../../config/SiteColors";

export const HomeDataContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 43px;
    margin-bottom: 43px;
`;

export const LeftHomeDataContainer = styled.div`
    padding: 17px;
    padding-right: 30px;
    border: 2px solid ${accentColorLight};
    background: ${accentColorLight}; // mauve
    text-align: right;
    height: 225px;
    font-size: 1.2rem;
`;

export const RightHomeDataContainer = styled.div`
    padding: 17px;
    padding-left: 30px;
    border: 2px solid ${darkBrown};
    background: ${darkBrown}; // dark mauve
    text-align: left;
    height: 225px;
    font-size: 5rem;
`;

