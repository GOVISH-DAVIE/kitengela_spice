import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContextInterface } from '../../utils/context';
import Cookies from '../../utils/cookies';
import { url } from '../../utils/utils';
import LoginForms from './loginForms';

export const Login = () => {
    let [redirect, setRedirect] = useState(false)
    const authFunctions = (fd: FormData) => {

        axios.post(`${url}login`, fd, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then(
            (data) => {
                let d: UserContextInterface = data.data
                Cookies.add('user', JSON.stringify(d), 1)
                console.log(data);
                setRedirect(true)
            }
        ).catch(err => console.error(err, 22))
    }
    return (<div className="login">
        {
            redirect ? <Redirect to={'/'} /> : null
        }
        <div className="canva"></div>
        <div className="form">
            <LoginForms authFunc={authFunctions} />
        </div>
    </div>)
}





