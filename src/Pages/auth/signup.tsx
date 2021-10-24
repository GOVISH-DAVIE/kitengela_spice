
import axios from 'axios';
import { url } from '../../utils/utils';

import SignUpFormFields from "./forms";
import Cookies from '../../utils/cookies';
import { UserContextInterface } from '../../utils/context';

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
                let d: UserContextInterface = data.data
                Cookies.add('user', JSON.stringify(d), 1)
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





