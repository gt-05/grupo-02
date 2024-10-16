import ProductListingPage from "./components/pages/ProductListingPage.jsx"
import Home from "./components/pages/Home.jsx"
import { useState } from "react";


function App() {
  const [page, setPage] = useState();

  if (page === "pagina1") {
    return <h1><Home /></h1>
  }

  if (page === "pagina2") {
    return <h1><ProductListingPage/></h1>
  }

  if (page === "pagina3") {
    return <h1>pagina3</h1>
  }

  function changepage(page) {
    setPage(page)
  }

  return (
    <>
    <div>
      <a href="#" onClick={event => changepage('pagina1')}>pagina1</a>
    </div>
    <div>
    <a href="#" onClick={event => changepage('pagina2')}>pagina2</a>
    </div>
    <div>
    <a href="#" onClick={event => changepage('pagina3')}>pagina3</a>
    </div>
    </>
  );
}

export default App;