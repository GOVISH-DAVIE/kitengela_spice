import React, { useEffect, useState } from 'react'; 
import ProductCard from './home/cards';
import { Container, Grid } from '@mui/material';

 

export default function ProductListing() {
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }) 


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Container>
    );
}