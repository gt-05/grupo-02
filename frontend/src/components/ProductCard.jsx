
function ProductCard(props) {
    return(
        <>
        <div>
            <div className="h-[321px] relative w-[292px] bg-[white]">
                {props.priceDiscount &&
                (<span className="absolute w-[96px] top-[20px] left-[20px] rounded-[29px] bg-[yellow] text-center py-[4px] px-[8px]">{Math.round(100 - (props.priceDiscount/props.price)*100)}%</span>)}
                <img src={props.image} alt="" />
            </div>
            <div className="w-[292px] mt-[17px]">
                <div className="w-[292px] text-[14px]">Tênis</div>
                <span className="w-[292px] text-[28px]">{props.name}</span>
                <div className="w-[292px] text-[22px]">
                    <span className="line-through text[]">{props.price}</span>
                    <span className="ml-[5px]">{props.priceDiscount}</span>
                </div>
            </div> 
        </div>
        </>
    )
}

export default ProductCard