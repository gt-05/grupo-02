import React from 'react';

const MenuNavegacao = () => {
    return (
        <div className="flex items-center">
            <a href="/" className="text-black py-2 px-4 rounded hover:font-bold hover:underline hover:text-[#C92071]">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="text-black py-2 px-4 rounded hover:font-bold hover:underline hover:text-[#C92071]">Produtos</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-black py-2 px-4 rounded hover:font-bold hover:underline hover:text-[#C92071]">Tênis</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-black py-2 px-4 rounded hover:font-bold hover:underline hover:text-[#C92071]">Nike</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-black py-2 px-4 rounded hover:font-bold hover:underline hover:text-[#C92071]">Tênis Nike Revolution 6 Next Nature Masculino</a>
        </div>
    );
};

export default MenuNavegacao;

