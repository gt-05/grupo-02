import { useState } from "react";
function App() {
const[page, setPage] = useState("Home");
  return (
    <>
    <div>
      <a href="#" onClick={event => setPage('Home')}>pagina1</a>
    </div>
    <div>
    <a href="#" onClick={event => setPage('ProductListingPage')}>pagina2</a>
    </div>
    <div>
    <a href="#" onClick={event => setPage('ProductViewPage')}>pagina3</a>
    </div>
    <hr />
    <div>
      {page}
    </div>
    </>
  );
}

export default App;