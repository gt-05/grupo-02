function HeaderResults() {
    return (
        <div className="header-results">
                <span>Ordenar por</span>
                <span className="dropdown">Menor preço
                    <ul className="lista">
                        <li className="dropdown-content">Menor preço</li>
                        <li className="dropdown-content">Maior preço</li>
                    </ul>
                </span>

        </div>

    )
}
export default HeaderResults