import { useEffect } from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { cartegoriesItemInterface } from "./newCartegories";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);


export const CartegoryItemComponent: React.FC<{ items: Array<cartegoriesItemInterface> }> = ({ items }) => {
    const classes = useStyles();
    useEffect(() => {
        console.log(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
            {
                items.map((e, i) => e.belongsTo == null ? <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            {e.name}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {
                                e.get_sub_cartegories.map((value, index) => <ListItem key={`item${index}`} button>
                                    <ListItemText primary={value.name} />
                                </ListItem>
                                )
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion> : <></>

                )
            }
        </List>
    </div>
}