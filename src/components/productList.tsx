import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ShoppingCart, SettingsOverscan } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mobliRoot: {
            width: '48vw',
            height: '50vh',
            borderRadius: '20px',
            float: 'left',
            marginLeft: '1vw',
            // marginRight:'.5',
            marginBottom: '2vh',
            background: 'rgba(255, 255, 255, .35)',
            backdropFilter: "blur(50px)",
        },
        root: {
            width: '24vw',
            height: '70vh',
            borderRadius: '20px',
            float: 'left',
            marginLeft: '1.5vw',
            marginBottom: '5vh',
            background: 'rgba(255, 255, 255, .35)',
            backdropFilter: "blur(50px)",
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function ProductListing() {
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={width > 960 ?classes.root : classes.mobliRoot}>
            <CardHeader
                avatar={
                    <IconButton aria-label="settings">
                        <SettingsOverscan />
                    </IconButton>
                    //   <Avatar aria-label="recipe" className={classes.avatar}>
                    //     R
                    //   </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ShoppingCart />
                    </IconButton>
                }
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography style={{
                    textAlign:'center'
                }} variant="h5" color="textPrimary" component="h4" > Product Name
                </Typography>
                <br />
                <Typography style={{
                    textAlign:'center'
                }} variant="h5" color="textPrimary" component="p" >$20.0
                </Typography>
            </CardContent>
         </Card >
    );
}