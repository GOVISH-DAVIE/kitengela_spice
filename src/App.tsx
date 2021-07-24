import React, { useEffect } from 'react';
import './css/main.css';
import { Navigation } from './components/navigation'
import { ShoppingCart } from '@material-ui/icons';
import { TextField, MenuItem } from '@material-ui/core';
import RecipeReviewCard from './components/cards';
import { HeaderComponent } from './components/header';
import ProductListing from './components/productList';
import { CartegoriesListing } from "./components/menus";
import SimpleMediaQuery from './components/mq';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


function App() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
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
