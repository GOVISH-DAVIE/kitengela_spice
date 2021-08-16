import { Navigation } from "../../navigation";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion'; 
import { Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {  Dashboard } from "@material-ui/icons";
import { ListSidebar } from "./sidebarList";

export const Cartegories = () => {
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
         

        </div>
    </div>)
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export default function MenuAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <Accordion  >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}> Cartegories </Typography>
                    </AccordionSummary>
                    <AccordionDetails> 
                            <List  className={classes.root} component="nav" aria-label="main mailbox folders">
                                <ListSidebar prefx='/am/cartegories/' items={['New', "All",]} />
                            </List> 
                    </AccordionDetails>
                </Accordion>

                <Accordion  >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}> Products </Typography>
                    </AccordionSummary>
                    <AccordionDetails> 
                            <List  className={classes.root} component="nav" aria-label="main mailbox folders">
                                <ListSidebar prefx='/am/products/' items={['New', "All",]} />
                            </List> 
                    </AccordionDetails>
                </Accordion>


            </List>

        </div>
    );
}