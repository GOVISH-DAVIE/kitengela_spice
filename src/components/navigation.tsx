import { ShoppingCart } from "@material-ui/icons";

export const Navigation = () => <div className='navigation'>
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

