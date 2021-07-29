import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import UserContext from '../utils/context';
import { openRoutes } from '../utils/routes';
import { Link } from 'react-router-dom';


export const Navigation = () => {
    const [height, setHeight] = useState(window.innerWidth)
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setHeight(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    return (<UserContext.Consumer>
        {(context) =>
            (height > 960) ? <div className='navigation'>
                <div className='logo '>logos</div>
                <div className='navi '>

                    {(context.value.user === null) === true ? <ul>
                        <li><Link to='/'>Home</Link> </li>
                        <li> <Link to='/login'>LogIn</Link> </li>
                        <li> <Link to='signup'>SignUp</Link> </li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                        : <ul>
                            <li><Link to='/'>Home</Link> </li>
                            <li> <Link to='/login'>LogIn</Link> </li>
                            <li> <Link to='signup'>SignUp</Link> </li>
                            <li><Link to='/'>Contact</Link></li>
                        </ul>}
                </div>
                <div className='cartIco '>
                    <ul>
                        <li>$0.00</li>
                        <li><ShoppingCart /></li>
                    </ul>
                </div>
            </div> : <div className="mobileNav">
                <div className='logo '>
                    <IconButton aria-label="settings">
                        logos {height}
                    </IconButton>
                </div>
                <div className='cartIco '>

                    <IconButton aria-label="settings">
                        <ShoppingCart />
                    </IconButton>
                </div>
                <div className='menuBtn'>
                    <IconButton aria-label="settings">
                        <Menu />
                    </IconButton>
                </div>
            </div>
        }
    </UserContext.Consumer>
    );
}
