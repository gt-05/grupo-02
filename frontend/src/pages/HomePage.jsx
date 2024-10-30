import Gallery from "../components/Gallery.jsx";
import Layout from "../components/Layout.jsx";
import Laye from "../components/Laye.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Section from "../components/Section.jsx";
import Colecao from "../components/ColecaoDestaque.jsx";
import CardMine from "../components/Colecao.jsx"

export default function Home() {
    return (
        <Layout >
            <Gallery />
            <CardMine/>
            <Colecao />
            <Section
                title="Produtos em Alta"
                titleAlign="left"
                link={{
                    text: "ver todos",
                    href: "https://redirect.link",
                    color: "#C92071"
                }}>
                <ProductListing />
            </Section>
            <Laye />
        </Layout>
    );
}
