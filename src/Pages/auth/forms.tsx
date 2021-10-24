import React, { useState, useEffect } from 'react'
import { Mail, VpnKey, Visibility, VisibilityOff, Person, Phone } from "@mui/icons-material";
import { createStyles, makeStyles, Theme, InputAdornment, TextField, Button, Typography } from '@material-ui/core';
import { emailExpression } from '../../utils/utils';


interface SignUpFormInterface {
    authFunc: (fd: FormData) => void
}
interface errorsInterface {
    name: boolean,
    email: boolean,
    tel: boolean,
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

const SignUpFormFields: React.FC<SignUpFormInterface> = ({ authFunc }: SignUpFormInterface) => {

    let [errors, setErrors] = useState({
        name: false,
        email: false,
        tel: false,
        password: false
    })
    const [passwordLenghtError, setPasswordLenghtError] = useState(false)
    let [name, setName] = useState('')
    let [tel, setTel] = useState('')
    let [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const workValidity = () => {

        if (name == null || name === '') {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, name: true }
            ))
        } else {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, name: false }
            ))
        }
        if (tel == null || tel === '') {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, tel: true }
            ))
        }
        else {
            setErrors((prevState: errorsInterface) => (
                { ...prevState, tel: false }
            ))
        }
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
                    name: false,
                    email: false,
                    tel: false,
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
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => setpassword(e.target.value)


    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField error={errors.name} value={name} onChange={handleName} required name='name' type='text' className={classes.tfiled}
                color="primary" id="standard-basic" label="Full Name" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person />
                        </InputAdornment>
                    ),
                }} />
            <TextField error={errors.tel} value={tel} onChange={handleTel} type='tel' required name='tel' className={classes.tfiled}
                color="primary" id="standard-basic" label="Telephone Number" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Phone />
                        </InputAdornment>
                    ),
                }} />
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
export default React.memo(SignUpFormFields)