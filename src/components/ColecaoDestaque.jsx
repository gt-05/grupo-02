import React from 'react';
import GroupImage from '../assets/images/Group.png';

const ColecaoDestaque = () => {
  return (
    <div className="relative">
      <h2 className="text-center text-black p-2 rounded absolute top-0 left-0 w-full">
        Coleções em destaque
      </h2>
      <img src={GroupImage} alt="Group" className="mx-auto" />
    </div>
  );
};

export default ColecaoDestaque;


