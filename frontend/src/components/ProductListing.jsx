import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductListing({ maxNumber }) {
    const url = 'https://raw.githubusercontent.com/gt-05/.github/refs/heads/main/db.json';
    const [products, setProducts] = useState([]);

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
        <div className="flex flex-wrap m-auto gap-[22px] justify-center">
            {products.slice(0, maxNumber).map((product, index) => {
                let image = product.images[0]?.url ?? product.placeHolder_image; // Usando let aqui

                return (
                    <ProductCard
                        key={index}
                        image={image}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.price_with_discount}
                        alt={product.name} // Adicionando um alt para a imagem
                    />
                );
            })}
        </div>
    );
}

export default ProductListing;
