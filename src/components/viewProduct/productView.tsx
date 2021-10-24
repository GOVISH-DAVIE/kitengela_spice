

interface ProductViewInterface {
    img: string
}

export const ProductView: React.FC<ProductViewInterface> = ({ img }) => {
    return (<div className="viewProductDetails">

        <div className="mainImage">
            <img alt={img} src={img} />
        </div>
        <div className="changeImg">
            <div className="nextImg">
                <img alt={img} src={img} />
            </div>
            <div className="nextImg">
                <img alt={img} src={img} />
            </div>
            <div className="nextImg">
                <img alt={img} src={img} />
            </div>

        </div>
    </div>)
}