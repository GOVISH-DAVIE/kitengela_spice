import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';


export const Navigation = () => {
    const [height, setHeight] = useState(window.innerWidth)
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setHeight(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    return (
        (height > 960) ? <div className='navigation'>
            <div className='logo '>logos</div>

            <div className='navi '>
                <ul>
                    <li>Home {height}</li>
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
        </div> : <div className="mobileNav">
            <div className='logo '> 
                <IconButton aria-label="settings">
                     logos
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
    );
}
