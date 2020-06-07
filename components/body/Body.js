import Head from "next/head";
import React from "react";
import {Header} from "../header/Header";
import {ContentWrapper} from "./styles";
import {Footer} from "../footer/Footer";

const Body = props => (
    <div>
        <Head>
            <title>Website</title>
        </Head>
        <Header/>
        <ContentWrapper>
            {props.children}
        </ContentWrapper>
        <Footer/>
    </div>
);

export default Body;