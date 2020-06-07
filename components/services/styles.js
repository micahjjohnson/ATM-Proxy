import styled from 'styled-components';
import {accentColorLight} from "../../config/SiteColors";

export const ServiceBookButton = styled.button`
    margin-top: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 30px;
    border: none;
    background-color: ${accentColorLight};
    outline: 0;
`;