import React, { useEffect } from 'react';
import './css/main.css';
import { Navigation } from './components/navigation'
import { ShoppingCart } from '@material-ui/icons';
import { TextField, MenuItem } from '@material-ui/core';
import RecipeReviewCard from './components/cards';

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
            <div className='navHeader'>
              <p>Home / Product</p>

              <h2>Shop</h2>
              <div className='filter'>
                <p>Showing 1 - 12 results

                </p>
              </div>
            </div>


            <div className='properties' >
              <RecipeReviewCard />
              <RecipeReviewCard />
              <RecipeReviewCard />
              <RecipeReviewCard />

            </div>



          </div>
        </div>
      </div>
      <div className='ProductListing' >
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
    </div>
  );
}

export default App;
