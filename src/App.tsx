import React, { useEffect, useState } from 'react';
import './css/main.css';
import './css/mobile.css';
import UserContext, { defUser, UserContextInterface } from './utils/context';
import { openRoutes } from "./utils/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/home';

function App() {
const [userState, setUserState] = useState(defUser)
const updateUser = (e:UserContextInterface)=>{setUserState(e)}
  useEffect(() => {


  }, [])
  return (
    <Router>
      <UserContext.Provider value={{value:userState, updateUser:updateUser}} >

        <div className='main'>
          {/* <Navigation />
        <HeaderComponent />
        <CartegoriesListing />
        <div className='primary'>
          <CartegoriesListing />
        </div> */}
          {/* <SignUp /> */}


          {
            openRoutes.map((e, i) => <Route exact key={`${i}_route`} path={e.path} component={e.component} />)
          }

        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
