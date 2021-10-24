 import { Fragment } from 'react';
import { HeaderComponent } from '../components/home/headerComponent';
import { Navigation } from '../components/navigation'
import ProductListing from '../components/productList';
export const Home = () => {
  return (<Fragment>
    <Navigation />
    <br />
    <HeaderComponent />
    <ProductListing/>

  </Fragment>)
}





