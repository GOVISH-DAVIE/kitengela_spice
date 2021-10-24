import { useState, useEffect } from "react";

import { Grid, styled, Paper, Container } from '@mui/material';
import ProductCard from "./cards";
import MainCartegories from "./cartegories";




export const HeaderComponent = () => {
    const [width, setWidth] = useState(window.innerWidth)
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    return (
        <div className='header'>
            <Grid container  >
                <Grid item xs={1} sm={3}>
                    <MainCartegories />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Container>
                        <div className='headerContainer' >
                            <div className='headerContainerGlass' >
                                <div className='navHeader'>
                                    <p>Home / Product</p>

                                    <h2>Shop</h2>
                                    <div className='filter'>
                                        <p>Showing 1 - 12 results

                                        </p>
                                    </div>
                                </div>



                                <div className='properties' >
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
                                        </Grid>
                                    </Container>

                                </div>



                            </div>
                        </div>
                    </Container>

                </Grid>
            </Grid>
        </div >
    );
}