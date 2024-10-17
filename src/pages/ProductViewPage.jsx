import ProductListing from "../components/ProductListing.jsx"
import Gallery2 from "../components/Gallery2.jsx"
import MenuNavegaca from "../components/MenuNavegacao.jsx";

import Section from "../components/section.jsx";

import Layout from "../components/Layout.jsx";

export default function ProductViewPage() {
    return (
        <Layout>   
        <MenuNavegaca/>     
        <Gallery2/>
      <Section
      title="Produtos em Alta"
      titleAlign="left"
      link={
        {
          "text": "ver todos",
          "href": "https://redirect.link"
        }
      }>
      <ProductListing />
      </Section>
    </Layout>
    )
}
