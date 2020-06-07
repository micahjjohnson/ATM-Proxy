import * as React from "react";
import {cardLogoImg, FooterContainer} from "./styles";
import creditLogos from "../../assets/images/credit-logos.png";
import {sitePages} from "../../config/SiteText";

export class Footer extends React.Component {

    renderSiteMap = (pageLinks) => {
        return pageLinks.map((page, i) => {
            return (<li key={i}>{page}</li>)
        })
    };

    render() {
        return (
            <div className="auto-height">
                {/*<StickyFooter*/}
                {/*    normalStyles={{*/}
                {/*        // backgroundColor: "#999999",*/}
                {/*        backgroundColor: "#c5957b",*/}
                {/*        bottom: "0",*/}
                {/*        position: "absolute!important",*/}
                {/*        width: "100%"*/}
                {/*    }}*/}
                {/*    stickyStyles={{*/}
                {/*        backgroundColor: "rgba(255,255,255,.8)",*/}
                {/*        bottom: "0",*/}
                {/*        position: "absolute!important",*/}
                {/*        width: "100%"*/}
                {/*    }}*/}
                {/*>*/}
                <FooterContainer>
                    <div className="footer-container">
                        <ul>
                            {this.renderSiteMap(sitePages)}
                        </ul>
                    </div>

                    <div className="footer-container center-text site-footer-details">
                        2020 © Rare Gem. All rights reserved. <br/>
                        Site by EMJA
                    </div>
                    <div className="footer-container card-logo-container">
                        <img style={cardLogoImg} src={creditLogos} alt={'next'}/>
                    </div>
                </FooterContainer>
                {/*</StickyFooter>*/}
            </div>
        );
    }
}