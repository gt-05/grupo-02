import img from "../assets/images/arrow.svg"
function ProductListingheader(){
    return(
        <div className="header">
            <span className="beginning">Produtos em alta</span>
            <span className="ending">Ver todos<img className="arrow" src={img}/></span>
        </div>
    )
}
export default ProductListingheader