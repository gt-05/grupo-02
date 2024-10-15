import Logo from "./Logo"
import shoppingIcon from "/src/assets/images/shopping-cart.svg"

function Header (){
    return (
        <> 
        <div className="flex space-x-4 ">
            <Logo/>
            <input type="text" placeholder="Pesquisar produto..." className="bg-[#F5F5F5] rounded-md p-2 w-1/4" />
            <div className="">
            <a href="#" className="underline ">Cadastre-se</a>
            </div>
            <button className="w-28 h-10 text-[#F5F5F5] bg-[#C92071] rounded-md" >Entrar</button>
            <img src= {shoppingIcon} alt="Icone de carrinho de compras" />  
        </div>
        <div >
            <nav className="flex space-x-4">
                <a className="font-bold underline text-[#C92071]" href="#">Home</a>
                <a href="#">Produtos</a>
                <a href="#">Categorias</a>
                <a href="#">Meus Pedidos</a>
            </nav>
        </div>
        </>
    )
}

export default Header;