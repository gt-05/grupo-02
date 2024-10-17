import ProductCard from "./ProductCard.jsx";

function ProductListing() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="inner-container flex flex-wrap justify-center">
                <div className="cards flex flex-wrap justify-center">
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
    );
}

export default ProductListing;
