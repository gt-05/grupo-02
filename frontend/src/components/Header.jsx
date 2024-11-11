import shoppingIcon from "/src/assets/images/shopping-cart.svg"
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx"

function Header (){
    return (
        <> 
    <div className="w-full h-48 bg-white ">
        <div className="px-20 py-10">
            <div className="flex space-x-6 ">
            <Logo />
                <input type="text" placeholder="Pesquisar produto..." className="bg-[#F5F5F5] rounded-md p-2 w-5/12" />
                <div className="flex items-center pl-6 ">
                <a href="#" className="underline ">Cadastre-se</a>
                </div>
                <button className="w-28 h-10 text-[#F5F5F5] bg-[#C92071] rounded-md" >Entrar</button>
                <div className="pl-10 relative">
                    <img src= {shoppingIcon} className="min-w-[35px] items-center" alt="Icone de carrinho de compras" />
                    <span className="text-[white] text-[12px] font-bold absolute right-[5px] bottom-[27px]">2</span>
                </div>
            </div>

            <div className="pt-14">
                <nav className=" flex space-x-6">
                <NavLink to="/" className={({isActive}) => isActive 
                ? "font-bold underline text-[#C92071]" : "text-normal hover:font-bold hover:underline hover:text-[#C92071]" }> Home </NavLink>
                <NavLink to="/products" className={({isActive}) => isActive 
                ? "font-bold underline text-[#C92071]" : "text-normal hover:font-bold hover:underline hover:text-[#C92071]" }> Produtos </NavLink>
                <NavLink to="/productsView" className={({isActive}) => isActive 
                ? "font-bold underline text-[#C92071]" : "text-normal hover:font-bold hover:underline hover:text-[#C92071]" }> Categorias </NavLink>
                <NavLink to="/" className={({isActive}) => isActive 
                ? "font-bold underline text-[#C92071]" : "text-normal hover:font-bold hover:underline hover:text-[#C92071]" }> Pedidos </NavLink>
                </nav>
            </div>
        </div>
    </div>
        </>
    )
}

export default Header;