import React from 'react';
import Gallery from './components/Gallery'; // Ajuste o caminho conforme necessário

const Images = () => {
    const images = [
        { src: "https://via.placeholder.com/600x400.png?text=Image+1" },
        { src: "https://via.placeholder.com/600x400.png?text=Image+2" },
        { src: "https://via.placeholder.com/600x400.png?text=Image+3" },
        { src: "https://via.placeholder.com/600x400.png?text=Image+4" },
        { src: "https://via.placeholder.com/600x400.png?text=Image+5" }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Gallery images={images} />
        </div>
    );
};

export default Images;
