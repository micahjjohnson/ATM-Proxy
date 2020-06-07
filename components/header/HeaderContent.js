import React from 'react';
import {NavOptionContainer, NavOptionLink} from "./styles";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import Link from "next/link";
import {sitePages} from "../../config/SiteText";

export const forwardBtn = {
    width: '145px',
    marginLeft: '13px'
};

export const cartBtn = {
    width: '21px',
    margin: '0 10px 0 10px'
};

export class HeaderContent extends React.Component {

    renderNavOptions = (pages) => {
        return pages.map((page, i) => {
            return (
                <NavOptionContainer key={i}>
                    <Link href={"/" + page.toString().toLowerCase()}>
                        <NavOptionLink href="/">{page}</NavOptionLink>
                    </Link>
                </NavOptionContainer>
            )
        })
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <Link href="/">
                        <a><img style={forwardBtn} src={logo} alt={'next'}/></a>
                    </Link>
                </div>
                {this.renderNavOptions(sitePages)}
                <NavOptionContainer>
                    <NavOptionLink href="/"><img style={cartBtn} src={login} alt={'next'}/></NavOptionLink>
                </NavOptionContainer>
            </React.Fragment>
        );
    }
};