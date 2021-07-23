import React, { useEffect } from 'react';
import './css/main.css';
import { Navigation } from './components/navigation'
import { ShoppingCart } from '@material-ui/icons';
import { TextField, MenuItem } from '@material-ui/core';
import RecipeReviewCard from './components/cards';
import { HeaderComponent } from './components/header';

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
        <HeaderComponent />

      </div>
      <div className='productListing' >
        <div className='addon1'></div>
        <div className='mainaddon' >
          {
            [1, 2, 3, 4, 5].map(
              (e) => <RecipeReviewCard />
            )
          }

        </div>

        <div className='addon2'></div>

      </div>
    </>
  );
}

export default App;
