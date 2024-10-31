import React from 'react';
import Footer from './Footer'; // Ajuste o caminho conforme necessário
import Header from './Header'; // Ajuste o caminho conforme necessário

const Layout = ({ children, className }) => {
    return (
        <div className={`flex flex-col min-h-screen ${className}`}>
            <Header color="#C92071"/>
            <main className="flex-grow bg-[#F5F5F5]">
                {children}
            </main>
            <Footer color="white"/>
        </div>
    );
};

export default Layout;