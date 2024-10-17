import ProductListing from "../ProductListing.jsx"
import Header from '../Header.jsx'
import Section from "../section.jsx";
import Footer from "../Footer.jsx";

export default function ProductListingPage() {
    return (
        <>
        <Header/>
          
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
    </>
    )
}