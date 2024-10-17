import ProductListing from "../components/ProductListing.jsx"
import Gallery from "../components/Gallery.jsx"

import Section from "../components/section.jsx";

import Layout from "../components/Layout.jsx";

export default function ProductViewPage() {
    return (
        <Layout>        
        <Gallery/>
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
