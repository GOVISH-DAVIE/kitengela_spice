import React, { useState, useEffect, memo } from 'react'
import { Mail, VpnKey, Visibility, VisibilityOff, Person, Phone } from "@material-ui/icons";
import { createStyles, makeStyles, Theme, InputAdornment, TextField, Button } from '@material-ui/core';
interface SignUpFormInterface {
    authFunc: (fd: FormData) => void
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '50%',
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',

        },
    }),
);

const SignUpFormFields: React.FC<SignUpFormInterface> = ({ authFunc }: SignUpFormInterface) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        let form = e.currentTarget
        let fd = new FormData(form);
        authFunc(fd)
        e.preventDefault();

    }
    useEffect(() => {
        console.log('====================================');
        console.log('render logintext');
        console.log('====================================');
    })
    const classes = useStyles();
    const [passwordState, setpasswordState] = React.useState(true)
    const handleVisibility = () => setpasswordState(!passwordState)
    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField name='name' className={classes.tfiled}

                color="primary" id="standard-basic" label="Full Name" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person />
                        </InputAdornment>
                    ),
                }} />
            <TextField name='tel' className={classes.tfiled}

                color="primary" id="standard-basic" label="Telephone Number" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Phone />
                        </InputAdornment>
                    ),
                }} />
            <TextField name='mail' className={classes.tfiled}

                color="primary" id="standard-basic" label="Email" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail />
                        </InputAdornment>
                    ),
                }} />
            <TextField name='password' className={classes.tfiled} id="standard-basic" label="password"
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

            <Button className={classes.tfiled} variant="outlined" type='submit' >Submint</Button>
        </form>
    );
}
export default React.memo(SignUpFormFields)