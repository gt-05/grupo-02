import ProductCard from "./ProductCard"

function ProductListing() {
    return (
        <>
            <div className="container">
                <div className="inner-container">
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