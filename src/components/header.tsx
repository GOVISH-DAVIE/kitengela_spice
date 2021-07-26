import { useState, useEffect } from "react";
import RecipeReviewCard, { MobileCard } from './cards';
export const HeaderComponent = () => {
    const [width, setWidth] = useState(window.innerWidth)
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth);

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    return (
        width > 960 ? <div className='header'>
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
        </div> : <div>
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
                        <MobileCard />
                        <MobileCard />
                        <MobileCard />
                        <MobileCard />

                    </div>



                </div>
            </div>
        </div>
        </div>
    );
}