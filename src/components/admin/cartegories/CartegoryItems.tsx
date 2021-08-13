import { useEffect } from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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

    }, [])
    return <div className={classes.root}>

        <List component="nav" aria-label="secondary mailbox folders">
            {
                JSON.stringify(items)
                // items.map((e, i) => <ListItem key={i} button>
                //     <ListItemText primary={e.name} />
                // </ListItem>)
            }
        </List>
    </div>
}