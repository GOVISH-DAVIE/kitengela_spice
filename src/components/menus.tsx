import ProductListing from "./productList";

export const CartegoriesListing = () => <div className='productListing' >
    <div className='addon1'>
        <p>  search buisness </p>
    </div>
    <div className='mainaddon' >
        <h1> Cartegory</h1>
        {
            [1, 2, 3, 4, 5, 6].map(
                (e) => <> <ProductListing /> </>
            )
        }

    </div>

    <div className='addon2'>
        <p>View all</p>
    </div>

</div> 
