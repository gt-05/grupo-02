import ProductCard from "./ProductCard.jsx";

function ProductListing() {
    return (
        <div className="max-w-[1228px] flex justify-center items-center">
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap justify-center gap-5">
                    <ProductCard discountTag='30%' />
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
