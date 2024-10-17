import {useState} from 'react';


export default function Gallery() {

	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	}

	let imgs = [
		{ src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-2.jpeg?raw=true" },
		{ src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-3.jpeg?raw=true" },
		{ src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-4.jpeg?raw=true" },
		{ src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true" },
	];

	function handlerSlide(direction) {
		
		if (direction === 'next') {
			let position = current + 100;
			setCurrent(position > (imgs.length-1)*100 ? 0 : position);
		}

		if (direction === 'prev') {
			let position = current - 100;
			setCurrent(position < 0 ? (imgs.length - 1) * 100 : position);
		}
	}

	let tagsImg = imgs.map(function (img) {
		return (
			<div className="slide min-w-full">
				<img className="w-full h-full" src={img.src} />
			</div>
		)
	});


	return (
		<div className="gallery max-w-[700px] max-h-[570px] rounded ">			
			<div className="slider relative overflow-hidden">
				<div
					className="slides flex ease-in-out duration-500"
					style={css}>
					{tagsImg}
				</div>
				<span 
					className="absolute top-1/2 cursor-pointer" 
					id="prev" 
					onClick={event => handlerSlide('prev')}>
					<img src="/src/assets/icons/prev.svg" />
				</span>
				<span 
					className="absolute top-1/2 cursor-pointer right-0" 
					id="next"
					onClick={event => handlerSlide('next')}>
					<img src="/src/assets/icons/next.svg" />
				</span>
			</div>
		</div>
	);
}