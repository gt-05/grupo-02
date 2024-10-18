import React, { useState } from 'react';

const App = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Mostrar Imagem
            </button>
            {isVisible && (
                <img
                    src="https://s2-techtudo.glbimg.com/id5Wbn3ghTfNPhh7isEA8FGjwR0=/0x0:300x203/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/A/g/TtUZzPRtOQ8F05T5xrww/2011-08-27-susto.jpg"
                    alt="Imagem Exemplo"
                    className="mt-4"
                />
            )}
        </div>
    );
};

export default Categori;
