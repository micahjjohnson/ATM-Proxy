import React from 'react';
import {HeaderGridContainer} from "./styles";
import {HeaderContent} from "./HeaderContent";

export class Header extends React.Component {

    render() {
        return (
            <HeaderGridContainer>
                <HeaderContent/>
            </HeaderGridContainer>
        );
    }
}