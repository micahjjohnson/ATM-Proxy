import React from "react";
import Body from "../components/body/Body";
import {ChildPageLargeHeading} from "../assets/css/globalStyles";
import {Service} from "../components/services/Service";

export default function Services() {


    return (
        <Body>
            <ChildPageLargeHeading>SERVICES</ChildPageLargeHeading>
            <Service/>
        </Body>
    );
}