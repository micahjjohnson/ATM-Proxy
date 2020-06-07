import React from 'react';
import homeImg from "../assets/images/home.jpeg";
import Head from "next/head";
import {HomeHeader} from "../components/header/HomeHeader";
import {HomeContentWrapper} from "../components/body/styles";
import {CardButtonContainer} from "../assets/css/globalStyles";
import {HomeDataContainer, LeftHomeDataContainer, RightHomeDataContainer} from "../components/index/styles";
import {Footer} from "../components/footer/Footer";
import {homePageAboutUsLabel, homePageAboutUsText} from "../config/SiteText";

export const forwardBtn = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
};

export const test = {
    borderRadius: '1%',
    textAlign: 'center',
    border: '0px solid red',
    fontSize: '3rem',
    right: '17%',
    top: '300px',
    width: '298px',
    height: '89px',
    position: 'absolute'
};

export const btnContainer = {
    marginTop: '16px'
};

export default function Index() {
    return <div>
        <Head>
            <title>Website</title>
        </Head>

        <div>
            <img style={forwardBtn} src={homeImg} alt={'next'}/>
        </div>

        <div style={test}>
            <div>Enjoy luxury at our facilities</div>
            <div style={btnContainer}>
                <CardButtonContainer className="shadow_button">
                    BOOK NOW
                </CardButtonContainer>
            </div>
        </div>

        <HomeHeader/>

        <HomeContentWrapper>
            <HomeDataContainer>
                <LeftHomeDataContainer>{homePageAboutUsText }</LeftHomeDataContainer>
                <RightHomeDataContainer>{homePageAboutUsLabel}</RightHomeDataContainer>
            </HomeDataContainer>
        </HomeContentWrapper>

        <Footer/>
    </div>;
}