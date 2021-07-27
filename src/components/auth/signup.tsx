import React, { useState, useEffect, memo, useCallback } from 'react'
import { createStyles, makeStyles, Theme, InputAdornment, TextField, Button } from '@material-ui/core';

import { Mail, VpnKey, Visibility, VisibilityOff, Person, Phone } from "@material-ui/icons";
import axios from 'axios';
import { url } from '../../utils/utils';
import LoginTextFields from './login';


import SignUpFormFields from "./forms";

export const SignUp = () => {

    const authFunctions = (fd: FormData) => {

        axios.post(`${url}register`, fd, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then(
            (data) => {
                console.log(data);
            }
        ).catch(err => console.error(err, 22))
    }
    return (<div className="login">
        <div className="form">
            <SignUpFormFields authFunc={authFunctions} />
        </div>
        <div className="canva"></div>

    </div>)
}





