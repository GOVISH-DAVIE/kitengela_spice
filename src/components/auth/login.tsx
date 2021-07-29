import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext, { UserContextInterface } from '../../utils/context';
import Cookies from '../../utils/cookies';
import { url } from '../../utils/utils';
import LoginForms from './loginForms';
interface LoginIteface {
    updateUser: (e: UserContextInterface) => void
}
export const Login = () => {
    return (<UserContext.Consumer>
        {
            (context) => <LoginFragment updateUser={context.updateUser} />
        }
    </UserContext.Consumer>)

}





const LoginFragment: React.FC<LoginIteface> = ({ updateUser }: LoginIteface) => {
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
                let d: UserContextInterface = data.data.data
                Cookies.add('user', JSON.stringify(d), 1)
                console.log(data);
                updateUser(d)
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