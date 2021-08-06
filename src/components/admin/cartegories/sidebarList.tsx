import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

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