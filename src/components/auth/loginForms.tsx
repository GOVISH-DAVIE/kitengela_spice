import React, { useState, useEffect, memo, useRef, ChangeEventHandler, SetStateAction } from 'react'
import { Mail, VpnKey, Visibility, VisibilityOff, Person, Phone } from "@material-ui/icons";
import { createStyles, makeStyles, Theme, InputAdornment, TextField, Button, Typography } from '@material-ui/core';
import { emailExpression } from '../../utils/utils';


interface LoginFormIntaface {
    authFunc: (fd: FormData) => void
}
interface errorsInterface {
    email: boolean, 
    password: boolean
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

const LoginForms: React.FC<LoginFormIntaface> = ({ authFunc }: LoginFormIntaface) => {
   
    let [errors, setErrors] = useState({
        email: false, 
        password: false
    })
    const [passwordLenghtError, setPasswordLenghtError] = useState(false)
    let [email, setEmail] = useState('') 
    const [password, setpassword] = useState('')
    const workValidity = () => {

      
        if (password == null || password === '') {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, password: true }
            ))
        } if (password.length < 6) {
            setPasswordLenghtError(true)
            setErrors((prevState: errorsInterface) => (
                { ...prevState, password: true }
            ))
        } else {
            setPasswordLenghtError(false)
            setErrors((prevState: errorsInterface) => (
                { ...prevState, password: false }
            ))
        }
        if (!emailExpression.test(email)) {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, email: true }
            ))
        } else {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, email: false }
            ))
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        let form = e.currentTarget
        let fd = new FormData(form);
        console.log(form.checkValidity());
        if (!form.checkValidity()) {
            workValidity()
        } else {
            setErrors((prevState: errorsInterface) => (
                { 
                    email: false, 
                    password: false
                }
            ))
            authFunc(fd)
        }

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
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => setpassword(e.target.value)


    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
         
            <TextField error={errors.email} value={email} onChange={handleEmail} type='email' required name='email' className={classes.tfiled}
                color="primary" id="standard-basic" label="Email" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail />
                        </InputAdornment>
                    ),
                }} />
            <TextField error={errors.password} value={password} onChange={handlePass} type={
                passwordState ? "password" : "text"
            } required name='password' className={classes.tfiled} id="standard-basic" label="password"
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
            {/* <button type='submit'>submit</button> */}
            {
                passwordLenghtError ? <Typography style={{
                    textAlign: 'center'
                }} variant="subtitle2" color="error" component="p" >   *   password must be 6 charachers or longer
                </Typography> : <></>
            }
            <Button className={classes.tfiled} variant="outlined" type='submit' >Submint</Button>
        </form>
    );
}
export default React.memo(LoginForms)