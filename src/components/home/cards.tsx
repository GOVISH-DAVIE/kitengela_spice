import React from 'react';
import { makeStyles, } from '@mui/styles';
import { Typography, CardContent, CardMedia, Card, CardActions, Fab, Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';



const style = makeStyles({
    card: {
        background: 'rgba(255, 255, 255, .8)',
        borderRadius: '20px'
    }
})
export default function ProductCard() {
    const classes = style()
    return (
        <Card className={classes.card} >
            <CardMedia
                component="img"
                image="https://themegrilldemos.com/estore/wp-content/uploads/sites/50/2016/02/tie-250x180.jpg"
                alt="Product Name"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $20 </Typography>
            </CardContent>
            <CardActions>
                <Grid justifyContent={'center'} container>
                    <Fab color='primary' variant="extended">
                        <AddShoppingCart sx={{ mr: 1 }} />
                        Add To Cart
                    </Fab>
                </Grid>

            </CardActions>
        </Card>
    );
}

