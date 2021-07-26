import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'; 
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors'; 
import { ShoppingCart, SettingsOverscan } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '23vw',
            height: '65vh',
            borderRadius: '20px',
            float: 'left',
            marginLeft:'.55vw',
            // marginBottom:'5vh'
            background:'rgba(255, 255, 255, .45)',
            backdropFilter:"blur(50px)",
            

        },
        media: {
            height: 0,
            paddingTop: '65.25%', // 16:9
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



export default function RecipeReviewCard() {
    const classes = useStyles();
   

    return (
        <Card className={classes.root}>
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
                image="https://cdn-images.farfetch-contents.com/14/64/73/36/14647336_22738129_480.jpg"
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
         </Card>
    );
}



const moblieCard = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '46vw',
            height: '45vh',
            borderRadius: '20px',
            float: 'left',
            marginLeft:'1vw',

            marginBottom:'5vh',
            background:'rgba(255, 255, 255, .45)',
            backdropFilter:"blur(50px)",
            

        },
        media: {
            height: 0,
            paddingTop: '65.25%', // 16:9
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

export  function MobileCard() {
    const classes = moblieCard();
    

    return (
        <Card className={classes.root}>
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
                image="https://cdn-images.farfetch-contents.com/14/64/73/36/14647336_22738129_480.jpg"
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
         </Card>
    );
}