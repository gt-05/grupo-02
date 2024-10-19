
function ProductCard(props) {
    return (
        <div className="relative w-72">
            {props.discountTag && (
                <div className="absolute mt-5 ml-5 w-[5.94em] p-[5px] text-center font-bold">{props.discountTag}</div>
            )}
            <div className="pt-10 w-[18.25em] h-[301px]">
                <a href="/productsView"><img src={props.image} /></a>
            </div>
            <div>
                <div className="text-xs mt-5">Tênis</div>
                <div className="mt-2.5 text-2xl font-normal">{props.name}</div>
                <div className="mt-2.5">
                    <span className="line-through text-2xl">{props.price}</span>
                    <span className="ml-[5px] text-2xl font-black">{props.priceDiscount}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard