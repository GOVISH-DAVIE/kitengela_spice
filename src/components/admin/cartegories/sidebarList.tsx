import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import { Link } from 'react-router-dom';
interface ListSidebarInterfance {
    items: Array<String>,
    prefx: string
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            // backgroundColor: 'red',
        },
    }),
);

 

export const ListSidebar: React.FC<ListSidebarInterfance> = ({ items, prefx }: ListSidebarInterfance) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>  {
                items.map((e, i) => <Link className={classes.root} to={prefx + e} >
                    <ListItem button className={classes.root} >
                        <ListItemText primary={e} />
                    </ListItem >
                </Link>)}

        </div>
    );
}