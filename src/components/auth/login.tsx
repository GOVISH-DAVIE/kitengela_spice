import React from 'react'
import { createStyles, makeStyles, Theme, InputAdornment, TextField, Button } from '@material-ui/core';

import { Mail, VpnKey, Visibility, VisibilityOff } from "@material-ui/icons";

export const Login = () => <div className="login">

    <div className="canva"></div>
    <div className="form">
        <LoginTextFields />
    </div>
</div>





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '70%',
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',
            // borderColor: "yellow !important"



        },
    }),
);

export default function LoginTextFields() {
    const classes = useStyles();
    const [passwordState, setpasswordState] = React.useState(true)
    const handleVisibility = () => setpasswordState(!passwordState)
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.tfiled}

                color="primary" id="standard-basic" label="Email" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail />
                        </InputAdornment>
                    ),
                }} />
            <TextField className={classes.tfiled} id="standard-basic" label="password"
                InputProps={{
                    endAdornment: (
                        <InputAdornment style={{
                            cursor: 'pointer'
                        }} position="start" onClick={handleVisibility} >
                            {passwordState ? <Visibility /> : <VisibilityOff />}
                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position="start">
                            <VpnKey />
                        </InputAdornment>
                    ),
                }} />

            <Button className={classes.tfiled} variant="outlined">Submint</Button>
        </form>
    );
}
