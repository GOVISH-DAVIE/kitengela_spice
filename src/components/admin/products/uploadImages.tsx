import { Button, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React from 'react'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '100%',
            margin: '5px',
            // textAlign:'center'
            alignItems: 'left',
            justifyItems: 'left'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',
        },
        radios: {
            color: 'blue'
        }
    }),
);
export const UploadImages = () => {
    
    const classes = useStyles();
    return ( 
            <Container className={classes.root}>
                <Button variant='outlined' size='large'> <Image />Upload Main Image </Button>
                <br />
                <br />
                
                <Button variant='outlined' size='large'> <Image />Upload Product Images </Button>
                <br /> 
                <br /> 
                <Button variant='outlined' size='large' color='inherit' > Create Product</Button>

            </Container> 
    );
}