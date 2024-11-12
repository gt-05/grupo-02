import React from 'react';
import Logo from "./Logo.jsx"
import midias from '../assets/images/midias.svg';

const Footer = () => {
  return (
    <footer className="bg-dark_gray text-white p-8 flex flex-wrap justify-around w-ful text-left text-white bg-dark_gray p-5">
      {/* Logo e descrição */}
      <div className="mb-8 md:mb-0 w-80">
        <Logo color="white"/>

        <p className="text-white mb-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.
        </p>
        <div className="flex space-x-4">
          {/* Ícones de mídias sociais */}
          <a href="#"><img src={midias} alt="midias" /></a>
        </div>
      </div>

      {/* Informação */}
      <div className="mb-8 md:mb-0">
        <h4 className="text-xl font-semibold mb-2">Informação</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-white hover:text-dark_gray_2">Sobre Drip Store</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Segurança</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Wishlist</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Blog</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Trabalhe conosco</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Meus Pedidos</a></li>
        </ul>
      </div>

      {/* Categorias */}
      <div className="mb-8 md:mb-0">
        <h4 className="text-xl font-semibold mb-2">Categorias</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-white hover:text-dark_gray_2">Camisetas</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Calças</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Bonés</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Headphones</a></li>
          <li><a href="#" className="text-white hover:text-dark_gray_2">Tênis</a></li>
        </ul>
      </div>

      {/* Contato */}
      <div className=" md:mb-0 w-[210px]">
        <h4 className="text-xl font-semibold mb-2">Contato</h4>
        <p className="text-white">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p className="text-white">(85) 3051-3411</p>
      </div>

      {/* Rodapé com direitos autorais */}
      <div className="w-full text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-white">&copy; 2022 Digital College.</p>
      </div>
    </footer>
  );
};

export default Footer;
