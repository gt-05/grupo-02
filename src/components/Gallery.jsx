import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const Gallery = ({ images }) => {
    return (
        <Swiper navigation>
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={image.src}
                        alt={`Slide ${index + 1}`}
                        style={{
                            width: '70%', // ajuste conforme necessário
                            transform: 'rotate(-5deg)', // rotaciona a imagem
                            marginRight: '20px', // espaço entre a imagem e o texto
                        }}
                    />
                    <div style={{ maxWidth: '300px' }}>
                        <h2>Melhores ofertas personalizadas</h2>
                        <h3>Queima de estoque Nike 🔥</h3>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor
                            laboris eiusmod irure consectetur.
                        </p>
                        <button style={{ padding: '10px 20px', borderRadius: '4px' }}>
                            Ver Ofertas
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Gallery;
