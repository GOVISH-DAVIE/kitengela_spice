import React, { useEffect } from 'react';
import './css/main.css';
import './css/mobile.css';
import UserContext, { defUser } from './utils/context';
import { openRoutes } from "./utils/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/home';

function App() {


  useEffect(() => {


  }, [])
  return (
    <Router>
      <UserContext.Provider value={defUser} >

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
