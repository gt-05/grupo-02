import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx"

function ProductListing(props){
    const url = 'https://raw.githubusercontent.com/gt-05/.github/refs/heads/main/db.json'
    let [products, setProducts] = useState([]);

    useEffect(function (){
        fetch(url).then(function(response) {return response.json()}).then(function(body) {
            setProducts(body.products)
        })
    },[])

    return(
    <>
        <div className="flex flex-wrap m-auto gap-[22px] justify-center">
            {products.slice(0, props.maxNumber).map((product, index) =>
                <ProductCard
                key={index}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                priceDiscount={product.price_with_discount}
                />
            )}
        </div>
    </> 
    )
}
export default ProductListing