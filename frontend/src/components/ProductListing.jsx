import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductListing() {
    const [products, setProducts] = useState([]);
    useEffect(function (){
        fetch("http://localhost:3000/products").then(response => response.json())
        .then(body => {
            console.log(body)
            setProducts(body)
        })
    },[])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-wrap m-[6px] justify-between">
            {products.slice(0, 4).map((product) => {
               
                
                return (
                    <ProductCard
                    key={product.id}
                    images={product.images[0]}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.price_with_discount}
                    slug={product.slug}
                    />
                    
                );
            })}
        </div>
    );
}

export default ProductListing;


/**
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
 */