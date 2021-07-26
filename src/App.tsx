import React, { useEffect } from 'react';
import './css/main.css';
import './css/mobile.css';
import { Navigation } from './components/navigation' 
import { HeaderComponent } from './components/header'; 
import { CartegoriesListing } from "./components/menus"; 

 

function App() { 

  
  useEffect(() => {


  }, [])
  return (
    <>
      <div className='main'>
        <Navigation />
        {/* <SimpleMediaQuery /> */}
        <HeaderComponent />
        <CartegoriesListing />
        <div className='primary'>
          <CartegoriesListing />
        </div>
      </div>
    </>
  );
}

export default App;
