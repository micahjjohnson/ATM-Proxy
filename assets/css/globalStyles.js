import styled from 'styled-components';
import {accentColorLight} from "../../config/SiteColors";

export const CardButtonContainer = styled.button`
    margin-top: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 47px;
    border: none;
    background-color: ${accentColorLight};
    outline: 0;
`;

export const ChildPageLargeHeading = styled.div`
    font-size: 9rem;
    text-transform: uppercase;
`;


export const CardContainer = styled.div`
margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
      border-radius: 15px;
    width: 100px;
    background-color: white;
    height: 130px;
`;

export const CardContainer2 = styled.div`
margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid orange;
      border-radius: 15px;
    width: 100px;
    height: 130px;
    background-color: white;
    z-index: 999;
`;