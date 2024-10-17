import ProductListing from "../components/ProductListing.jsx"

import Section from "../components/section.jsx";

import Layout from "../components/Layout.jsx";

export default function ProductListingPage() {
    return (
        <Layout className="flex flex-col min-h-screen">
        
          
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