import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx"

function ProductListing(){
    const url = 'https://raw.githubusercontent.com/gt-05/.github/refs/heads/main/db.json'
    let [products, setProducts] = useState([]);

    useEffect(function (){
        fetch(url).then(function(response) {return response.json()}).then(function(body) {
            setProducts(body.products)
        })
    },[])

    return(
    <>
        <div className="flex flex-wrap m-auto max-w-[1200px] gap-2.5">
            {products.map((product, index) =>
                <ProductCard key={index} image={product.images[0]} name={product.name} price={product.price} priceDiscount={product.price_with_discount}/>
            )}
        </div>
    </> 
    )
}
export default ProductListing