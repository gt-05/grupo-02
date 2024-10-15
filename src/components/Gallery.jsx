import React, { useEffect } from 'react';
import air from "../assets/images/air.svg"

       

function Gallery(){
    
    useEffect(() => {
        var swiper = new Swiper(".default-carousel", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, []);
    return(
        <div className="w-full relative">
        <div className="swiper default-carousel swiper-container">
        <div className="swiper-wrapper">
         <div className="swiper-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center ">
           <div style={{ maxWidth: '300px' }}>
                        <h2>Melhores ofertas personalizadas</h2>
                        <h3>Queima de estoque Nike 🔥</h3>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor
                            laboris eiusmod irure consectetur.
                        </p>
                    </div>
             <img src={air}/>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <img src={air}/> 
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <img src={air}/>
           </div>
         </div>
        </div>
        <div className="flex items-center gap-8 lg:justify-start justify-center">
        <button id="slider-button-left" className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !left-5 hover:bg-indigo-600 " data-carousel-prev>
         
       </button>
       <button id="slider-button-right" className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8  !right-5 hover:bg-indigo-600" data-carousel-next>
         
       </button>
        </div>
        <div className="swiper-pagination"></div>
        </div>
        </div>
)
}

export default Gallery

