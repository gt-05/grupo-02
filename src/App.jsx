import Gallery from "./components/Gallery.jsx"
import ProductListing from "./components/ProductListing.jsx"
import Footer from "./components/Footer.jsx"
import Header from './components/Header.jsx'
import Section from "./components/section.jsx";

function App() {

  return (
    <>
    
      <Header/>
      <Gallery/>
      <Section>

        <ProductListing />

      </Section>
      <Footer />
    </>
  );
}

export default App;
