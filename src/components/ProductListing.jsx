import ProductCard from "./ProductCard.jsx"
import ProductListingHeader from "./ProductListingHeader.jsx"

function ProductListing() {
    return (
        <>
            <div className="container">
                <div className="inner-container">
                    <ProductListingHeader />
                    <div className="cards">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListing