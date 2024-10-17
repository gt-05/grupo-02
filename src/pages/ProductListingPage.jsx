import ProductListing from "../components/ProductListing.jsx"
import Header from '../components/Header.jsx'
import Section from "../components/section.jsx";
import Footer from "../components/Footer.jsx";
import Layout from "../components/Layout.jsx";

export default function ProductListingPage() {
    return (
        <Layout>
        
          
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
      <Footer/>
    </Layout>
    )
}