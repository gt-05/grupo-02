import React from "react";

function Laye() {
    const imageUrl = "https://s3-alpha-sig.figma.com/img/38c2/f5b3/f256f97445a6bbaae35cd27max-w-[466px]d99d2d021?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IqyQtsU8PxwN3cwCVg5-1felS8IdYW3ay~XRfJBJyTuPN-h6EkdNb6GXh27K7-GhcTU1ffP1X00OUaZyPCXiN7SCvQk8lq8u2XP9J~YHCIhin3vXX-G~LuIUBuVxlCAH1ZwPrMGsp8MBi2AXf5bmW7nwrJMF7E0La1IWm-hktQka71hzFmPLwb1-JwtDwdoaHwOtSKCbQ1wjRgIKgEihCDmOm~3-l2z4kzwpzwXw2MsXjg33JJ~exYORix~lZrviiw4g~usit0htYn~YtPKqi9PRYwN7a6jdEeRyUNtIdnHaXzPG51w0zLvYv1eezV-PLrVsHXJSEQ6eoK9x1H5g3g__";

    return (
        <div className="flex m-auto gap-[80px] justify-center mt-[100px] pt-[100px] bg-[white]">
            <div className="relative  grid flex-wrap">
                <img src="./src/assets/images/shoe.svg" alt="shoe" className="max-w-[573px] absolute top-[30px] left-[-50px]" />
                <img src="./src/assets/images/elipse.svg" alt="elipse" className="max-w-[466px]" />
            </div>
            <div className="max-w-[589px]">
                <h2 className="text-2xl font-bold">Oferta especial</h2>
                <h3 className="text-xl font-semibold">Air Jordan edição de colecionador</h3>
                <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
            </div>
        </div>
    );
}

export default Laye;
