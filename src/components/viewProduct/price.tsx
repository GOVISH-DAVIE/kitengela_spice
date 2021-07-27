import { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography, IconButton, CardContent, CardMedia, CardHeader, Card } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ShoppingCart, SettingsOverscan, FavoriteBorder, Add, Remove } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btr: {
            background: "#000",
            color: "#fff"
            // border:"solid "
        },
        root: {
            width: '23vw',
            minHeight: '45vh',
            borderRadius: '20px',
            float: 'left',
            marginLeft: '.55vw',
            background: 'rgba(255, 255, 255, .45)',
            backdropFilter: "blur(50px)",


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


export const PriceSection = () => {
    const classes = useStyles();
    let price = 20
    const [Amount, setAmount] = useState(0)
    let [count, setcount] = useState(1)

    useEffect(() => {
        setAmount(count * price)
    }, [count])
    const handleReduceCount = () => {


        if (count === 1) {

        } else {
            setcount(count--);
        }
    }
    const handleCountAdd = () => setcount(count++)
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <IconButton aria-label="settings">
                        <FavoriteBorder />
                    </IconButton>
                }
            />

            <CardContent>
                <Typography style={{
                    textAlign: 'center'
                }} variant="h5" color="textPrimary" component="h4" > Product Name
                </Typography>
                <br />

                <div className='Count'>
                    <IconButton key='22' className={
                        classes.btr
                    } color='secondary' onClick={handleReduceCount} >
                        <Remove />
                    </IconButton>
                    <Typography style={{
                        textAlign: 'center'
                    }} variant="h5" color="textPrimary" component="p" > {
                            count
                        }  </Typography>



                    <IconButton key='2233' className={
                        classes.btr
                    } onClick={handleCountAdd} >
                        <Add />
                    </IconButton>

                </div>
                <Typography style={{
                    textAlign: 'center'
                }} variant="h5" color="textPrimary" component="p" > ${
                        Amount}   </Typography>
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
            marginLeft: '1vw',

            marginBottom: '5vh',
            background: 'rgba(255, 255, 255, .45)',
            backdropFilter: "blur(50px)",


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

export function MobileCard() {
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
                    textAlign: 'center'
                }} variant="h5" color="textPrimary" component="h4" > Product Name
                </Typography>
                <br />
                <Typography style={{
                    textAlign: 'center'
                }} variant="h5" color="textPrimary" component="p" >$20.0
                </Typography>
            </CardContent>
        </Card>
    );
}