import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductListing() {
    const [products, setProducts] = useState([]);
    useEffect(function (){
        fetch("http://localhost:3000/products").then(response => response.json())
        .then(body => {
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
