import * as React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {services} from "../../config/SiteText";
import {CardButtonContainer} from "../../assets/css/globalStyles";
import {ServiceBookButton} from "./styles";

export const btnContainer = {
    marginTop: '16px'
};

export class Service extends React.Component {

    renderServiceOptions = (service) => {
        return service.map((service, i) => {
            return (
                <AccordionItem className={"service_option_container"} key={i}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={"service_accordion__button"}>
                            <div className={"flex service_accordion_item_button_header_container"}>
                                <div>
                                    {service.title}
                                </div>
                                <div className={"text_right"}>
                                    ${service.price}
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div>{service.description}</div>
                        <div>Approximately: {service.duration}</div>
                        <div>Photos Can be to the left in a scroll</div>
                        <div style={btnContainer}>
                            <ServiceBookButton id={"book-service-" + service.id} className="shadow_button">
                                BOOK NOW
                            </ServiceBookButton>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            )
        });
    };

    render() {
        return (
            <div>
                <Accordion allowZeroExpanded={true} id={"serviceContainer"} className={"service_accordion"}>
                    {this.renderServiceOptions(services)}
                </Accordion>
            </div>
        );
    }
}