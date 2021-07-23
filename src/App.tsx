import React, { useEffect } from 'react';
import './css/main.css';
import { Navigation } from './components/navigation'
import { ShoppingCart } from '@material-ui/icons';
import { TextField, MenuItem } from '@material-ui/core';
import RecipeReviewCard from './components/cards';
import { HeaderComponent } from './components/header';
import ProductListing from './components/productList';

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
        <div className='addon1'>
        <p>  search buisness </p>
        </div>
        <div className='mainaddon' >
          {
            [1, 2, 3, 4, 5, 6, 7].map(
              (e) => <> <ProductListing /> </>
            )
          }

        </div>

        <div className='addon2'></div>

      </div>
    </>
  );
}

export default App;
