import ProductListing from "../components/ProductListing.jsx"
import Gallery2 from "../components/Gallery2.jsx"
import MenuNavegaca from "../components/MenuNavegacao.jsx";

import Section from "../components/section.jsx";

import Layout from "../components/Layout.jsx";

import BuyBox from "../components/BuyBox.jsx";

export default function ProductViewPage() {
    return (
        <Layout className="flex flex-col min-h-screen">   
        <MenuNavegaca/>     
        <Gallery2/>
        <BuyBox/>
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
