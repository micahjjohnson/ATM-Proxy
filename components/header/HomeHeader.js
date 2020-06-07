import React from 'react';
import {HomeHeaderGridContainer} from "./styles";
import {HeaderContent} from "./HeaderContent";

export class HomeHeader extends React.Component {

    render() {
        return (
            <HomeHeaderGridContainer>
                <HeaderContent/>
            </HomeHeaderGridContainer>
        );
    }
}