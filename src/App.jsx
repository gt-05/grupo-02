import Gallery from "./components/Gallery.jsx"
import ProductListing from "./components/ProductListing.jsx"
import Header from './components/Header.jsx'
import Section from "./components/section.jsx";

function App() {

  return (
    <>
    
      <Header/>
    
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
    </>
  );
}

export default App;
