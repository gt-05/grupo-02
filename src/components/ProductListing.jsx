import {useEffect, useState} from "react";
import ProductCard from "./ProductCard.jsx";

function ProductListing() {

    let [productsList, setProducts] = useState([])

    useEffect(function(){
        fetch('https://raw.githubusercontent.com/gt-05/.github/refs/heads/main/db.json').then(function(response){
            return response.json()
        }).then(function(body){
            return setProducts(body.products);
            
        })
    })
    
    return (
        
        <div className="max-w-[1228px] flex justify-center items-center">
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap justify-center gap-5">
                    {productsList.map(product => {
                        return <ProductCard
                        discountTag='30%'
                        image={product.images[0]}
                        name={product.name}
                        price={product.price} 
                        priceDiscount={product.price_with_discount}/>
                    })

                    }
                    

                </div>
            </div>
        </div>
    );
}

export default ProductListing;
