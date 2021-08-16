import  { useEffect, useState } from 'react';
import './css/main.css';
import './css/mobile.css';

import UserContext, { defUser, UserContextInterface } from './utils/context';
import { openRoutes, protectedRoutes } from "./utils/routes";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Cookies from './utils/cookies';







function App() {
  let [userState, setUserState] = useState(defUser)
  const updateUser = (e: UserContextInterface) => { setUserState(e) }
  useEffect(() => {
    // log
    console.log((Cookies.get('user') === ''));
    if ((Cookies.get('user') === '')) {
      setUserState({
        user: null,
        token: null
      })
    } else {

      setUserState(JSON.parse(Cookies.get('user')))
    }

    // setUserState(Cookies.get('user'))
  }, [])
  return (
    <Router>

      <UserContext.Provider value={{ value: userState, updateUser: updateUser }} >

        <div className='main'>

          {
            userState.user == null ? openRoutes.map((e, i) => <Route exact key={`${i}_route`} path={e.path} component={e.component} />)
              : protectedRoutes.map((e, i) => <Route exact key={`${i}_route`} path={e.path} component={e.component} />)
          }

        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
