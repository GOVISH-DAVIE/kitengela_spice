import { Navigation } from "../../navigation";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion'; 
import { Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CalendarViewDay, Dashboard } from "@material-ui/icons";
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

                <Accordion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}> <ListItem button >
                            <ListItemIcon><CalendarViewDay /></ListItemIcon>
                            <ListItemText primary={'Cartegories'} />
                        </ListItem></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListSidebar prefx='/am/cartegories/' items={['New', "All",]} />
                            </List>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </List>

        </div>
    );
}