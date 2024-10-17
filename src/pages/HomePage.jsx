import Gallery from "../components/Gallery.jsx";
import Layout from "../components/Layout.jsx";
import Laye from "../components/Laye.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Section from "../components/section.jsx";
import Colecao from "../components/ColecaoDestaque.jsx";

export default function Home() {
    return (
        <Layout>
            <Gallery />
            <Colecao />
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
            <Laye />
        </Layout>
    );
}
