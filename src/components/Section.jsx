function Section(props) {
    return (
        <div className="i">
            <div className="header">
                <span className="beginning">Produtos em alta</span>
                <span className="ending">Ver todos<img className="arrow" src='src/assets/images/arrow.svg' /></span>
            </div>
                {props.children}
        </div>
    )
}
export default Section