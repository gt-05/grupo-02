import ProductListing from "../components/ProductListing.jsx"
import Gallery from "../components/Gallery.jsx"
import Header from '../components/Header.jsx'
import Section from "../components/section.jsx";
import Footer from "../components/Footer.jsx"

export default function ProductViewPage() {
    return (
        <>
        
          
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
      
    </>
    )
}
