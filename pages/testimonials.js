import React from "react";
import Body from "../components/body/Body";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {ChildPageLargeHeading} from "../assets/css/globalStyles";

export default function Testimonials() {
    return (
        <Body>
            <div>
                <ChildPageLargeHeading>TESTIMONIaLS</ChildPageLargeHeading>
                <div>Testimonial</div>
            </div>
        </Body>
    );
}