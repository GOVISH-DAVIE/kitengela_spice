import React,{useEffect, Suspense} from 'react';
import logo from './logo.svg';
import {AppBar ,Toolbar, IconButton,Typography, Button} from '@material-ui/core';
import { Menu , ShoppingBasket, ShoppingCart} from '@material-ui/icons';
import './css/main.css'; 
import { useStyles } from './st';
// import {add} from './components/math';

function App() {
  const classes = useStyles();
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

     </div>
  );
}

export default App;
