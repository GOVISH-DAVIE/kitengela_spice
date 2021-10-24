import React, { useState } from 'react';
// import  from '@material-ui/core/Typography'; 
import { Button, Typography } from '@mui/material';
import { Redirect } from 'react-router-dom';



export const AuthenticationFalback = () => {
    const [redirect, setRedirect] = useState(false)
    const handleRedirect = () => setRedirect(true)


    return (<div className="login">
        {
            redirect ? <Redirect to={'/'} /> : null
        }
        <div className="canva"></div>
        <div className="form">

            <Typography variant="h6" gutterBottom>
                Authentication Successful
            </Typography>
            <Button onClick={handleRedirect} variant='outlined' size='large' >
                home
            </Button>
        </div>
    </div>)
}