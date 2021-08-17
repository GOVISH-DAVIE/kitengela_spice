import { Button } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React from 'react'
export const UploadImages = () => {
    return (
        <React.Fragment>
            <Button variant='outlined' size='large'> <Image />Upload Main Image </Button>
            <br />
            <br />
            <Button variant='outlined' size='large'> <Image />Upload Product Images </Button>
            <br />
            <br />
        </React.Fragment>
    );
}