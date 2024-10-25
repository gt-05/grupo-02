import ProductListing from "../components/ProductListing.jsx"

import Section from "../components/Section.jsx";

import Layout from "../components/Layout.jsx";

import ProductCheckBox from "../components/ProductCheckBox.jsx";

export default function ProductListingPage() {
    return (
      <>
      
        <Layout className="flex  min-h-screen">

            <div className="flex place-content-around"> {/* Div de formatação pra ajustar "ProductcheckBox ao lado da section"*/}
      <ProductCheckBox className=""/>
      <Section>
        <div className="flex pt-6">
      <ProductListing />
        </div>
      </Section>
            </div> 
      
    </Layout>
        </>
    )
}