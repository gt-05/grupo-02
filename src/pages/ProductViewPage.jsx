import React from 'react';
import ProductListing from "../components/ProductListing.jsx";
import Gallery2 from "../components/Gallery2.jsx";
import MenuNavegacao from "../components/MenuNavegacao.jsx";
import Section from "../components/Section.jsx";
import Layout from "../components/Layout.jsx";
import BuyBox from "../components/BuyBox.jsx";
import ProductOptions from "../components/ProductOptions.jsx";

export default function ProductViewPage() {
    const sizes = ['39', '40', '41', '42', '43']; // Defina os tamanhos
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1']; // Defina suas cores aqui

    return (
        <Layout className="flex flex-col min-h-screen">   
            <MenuNavegacao/>     
            <div className="flex">
                <Gallery2 className="flex-grow" />
                <div className="ml-4">
                    <BuyBox
                        name="Tênis Nike Revolution 6 Next Nature Masculino"
                        reference="REF:38416711"
                        stars={4.7}
                        rating={90}
                        price="R$219,00"
                        priceDiscount={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                    >
                        <ProductOptions sizes={sizes} colors={colors} shape="square" />
                        <p>COMPRAR</p>
                    </BuyBox>
                </div>
            </div>
            <Section
                title="Produtos em Alta"
                titleAlign="left"
                link={{
                    text: "ver todos",
                    href: "https://redirect.link"
                }}
            >
                <ProductListing />
            </Section>
        </Layout>
    );
}
