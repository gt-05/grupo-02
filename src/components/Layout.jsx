import React from 'react';
import Footer from './Footer'; // Ajuste o caminho conforme necessário
import Header from './Header'; // Ajuste o caminho conforme necessário

const Layout = ({ children, className }) => {
    return (
        <div className={`flex flex-col min-h-screen ${className}`}>
            <Header /> {/* Adicionando o Header aqui */}
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;