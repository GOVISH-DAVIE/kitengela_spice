import React, { useEffect } from 'react';
import './css/main.css';
import { Navigation } from './components/navigation'
import { ShoppingCart } from '@material-ui/icons';

function App() {
  useEffect(() => {


  }, [])
  return (
    <div className='main'>
      <div className='navigation'>
        <div className='logo '>logos</div>

        <div className='navi '>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='cartIco '>
          <ul>
            <li>$0.00</li>
            <li><ShoppingCart /></li>
          </ul>
        </div>
      </div>
      <div className='header'>
        <div className='headerContainer' >
          <div className='headerContainerGlass' >


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
