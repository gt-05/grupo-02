import Gallery from "./components/Gallery.jsx"
import ProductListing from "./components/ProductListing.jsx"
import Header from './components/Header.jsx'

function App() {

  return (
    <>
    <div className=" w-full h-48 bg-white " >
      <Header/>
    </div>
      <Gallery/>
     
      <ProductListing />
    </>
  );
}

export default App;
