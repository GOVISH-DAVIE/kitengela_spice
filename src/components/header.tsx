
import RecipeReviewCard from './cards';
export const HeaderComponent = () => <div className='header'>
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
