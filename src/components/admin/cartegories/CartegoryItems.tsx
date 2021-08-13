import { useEffect } from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText';
import { cartegoriesItemInterface } from "./newCartegories";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);
 

export const CartegoryItemComponent: React.FC<{items: Array<cartegoriesItemInterface>}> = ({ items }) => {
    const classes = useStyles();
    useEffect(() => {
        console.log(items);
 // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div className={classes.root}>

        <List component="nav" aria-label="secondary mailbox folders">
            { 
                items.map((e, i) => <ListItem key={i} button>
                    <ListItemText primary={e.name} />
                </ListItem>)
            }
        </List>
    </div>
}