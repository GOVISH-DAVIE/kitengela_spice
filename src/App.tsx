import React, { useEffect } from 'react';
import './css/main.css';
import './css/mobile.css';
import { Navigation } from './components/navigation'
import { HeaderComponent } from './components/header';
import { CartegoriesListing } from "./components/menus";
import { Login } from './components/auth/login';
import { SignUp } from './components/auth/signup';
import { ViewProduct } from './components/viewProduct/viewProduct';
import { DescriptionProductVIew } from './components/viewProduct/description';



function App() {


  useEffect(() => {


  }, [])
  return (
    <>
      <div className='main'>
        <Navigation />
        {/* <HeaderComponent /> */}
        {/* <CartegoriesListing />
        <div className='primary'>
          <CartegoriesListing />
        </div> */}
        <SignUp />
        {/* <ViewProduct />

        <DescriptionProductVIew /> */}
        {/* <Login /> */}

      </div>
    </>
  );
}

export default App;
