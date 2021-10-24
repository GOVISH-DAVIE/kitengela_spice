import { useState, useEffect } from "react";
import NormalCard from "./cards";
import RecipeReviewCard, { MobileCard } from './cards';

import {Grid, styled, Paper} from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
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
        width < 960 ? <div className='header'>
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
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Item>xs=8</Item>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>xs=8</Item>
                            </Grid>
                        </Grid>

                    </div>



                </div>
            </div>
        </div> : <div>
            <div className='header'>
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
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}