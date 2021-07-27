
import { PriceSection } from './price'
import { ProductView } from './productView'


export const ViewProduct = () => <div className='ViewProduct'>
    <ProductView img='https://material-ui.com/static/images/image-list/breakfast.jpg' />
    <div className='Productprice'>


        <PriceSection />

    </div> 
</div>