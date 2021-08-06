import { Container } from "@material-ui/core"
import { Navigation } from "../../navigation"
import MenuAccordion from "./cartegories"

export const NewCartegories = () => {
    return (<div>
        <Navigation />
        <div className="adminConsole">
            <div className="sidebar">
                <div className="close">
                    close
                </div>
                <div className="menu">
                    <MenuAccordion />
                </div>
            </div>
            <div className="body">
                <Container>
cd
                </Container>
            </div>

        </div>
    </div>)
}