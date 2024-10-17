import Logo from "./Logo"
import shoppingIcon from "/src/assets/images/shopping-cart.svg"

function Header (){
    return (
        <> 
    <div className="w-full h-48 bg-white ">
        <div className="px-20 py-10">
            <div className="flex space-x-6 ">
                <Logo/>
                <input type="text" placeholder="Pesquisar produto..." className="bg-[#F5F5F5] rounded-md p-2 w-5/12" />
                <div className="flex items-center pl-6 ">
                <a href="#" className="underline ">Cadastre-se</a>
                </div>
                <button className="w-28 h-10 text-[#F5F5F5] bg-[#C92071] rounded-md" >Entrar</button>
                <div className="pl-10">
                <img src= {shoppingIcon} alt="Icone de carrinho de compras" />  
                </div>
            </div>
        <   div className="pl-2 pt-14">
                <nav className=" flex space-x-6">
                    <a className="font-bold underline text-[#C92071]" href="/">Home</a>
                    <a href="/products">Produtos</a>
                    <a href="#">Categorias</a>
                    <a href="#">Meus Pedidos</a>
                </nav>
            </div>
        </div>
    </div>
        </>
    )
}

export default Header;