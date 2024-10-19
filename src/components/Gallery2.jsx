import { useState } from 'react';

export default function Gallery() {
    const [current, setCurrent] = useState(0);

    const css = {
        transform: `translateX(-${current}%)`
    };

    const imgs = [
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true", alt: "Image 1" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-2.jpeg?raw=true", alt: "Image 2" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-3.jpeg?raw=true", alt: "Image 3" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-4.jpeg?raw=true", alt: "Image 4" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true", alt: "Image 5" },
    ];

    function handlerSlide(direction) {
        if (direction === 'next') {
            let position = current + 100;
            setCurrent(position > (imgs.length - 1) * 100 ? 0 : position);
        }

        if (direction === 'prev') {
            let position = current - 100;
            setCurrent(position < 0 ? (imgs.length - 1) * 100 : position);
        }
    }

    const handleThumbnailClick = (index) => {
        setCurrent(index * 100);
    };

    const tagsImg = imgs.map((img, index) => (
        <div className="slide min-w-full" key={index}>
            <img className="w-full h-full" src={img.src} alt={img.alt} onError={(e) => e.target.src = '/path/to/default-image.jpg'} />
        </div>
    ));

    const thumbnailImgs = imgs.map((img, index) => (
        <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-20 h-20 object-cover cursor-pointer"
            onClick={() => handleThumbnailClick(index)}
        />
    ));

    return (
        <div className="gallery max-w-[700px] max-h-[570px] rounded">
            <div className="slider relative overflow-hidden">
                <div className="slides flex ease-in-out duration-500" style={css}>
                    {tagsImg}
                </div>
                <span 
                    className="absolute top-1/2 cursor-pointer" 
                    id="prev" 
                    onClick={() => handlerSlide('prev')}>
                    <img src="/src/assets/icons/prev.svg" alt="Previous" />
                </span>
                <span 
                    className="absolute top-1/2 cursor-pointer right-0" 
                    id="next"
                    onClick={() => handlerSlide('next')}>
                    <img src="/src/assets/icons/next.svg" alt="Next" />
                </span>
            </div>
            <div className="thumbnails flex justify-center mt-4">
                {thumbnailImgs}
            </div>
        </div>
    );
}
