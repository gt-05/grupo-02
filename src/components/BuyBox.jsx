// src/components/BuyBox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import starIcon from '../assets/star-icon.svg'; // Ajuste o caminho conforme necessário

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="p-4 border border-light-gray-2 rounded-lg">
      <h2 className="text-2xl text-dark-gray">{name}</h2>
      <p className="text-sm text-dark-gray-3">{reference}</p>
      <div className="flex items-center my-2">
        <span className="flex items-center bg-warning text-white text-sm px-2 py-1 rounded-md">
          {stars}
          <img src={starIcon} alt="Estrela" className="ml-1 w-3" />
        </span>
        <span className="text-sm text-light-gray ml-2">{rating} avaliações</span>
      </div>
      <div className="my-4">
        {priceDiscount ? (
          <>
            <span className="text-lg text-light-gray-2 line-through">{price}</span>
            <span className="text-2xl text-dark-gray-2 ml-2">{priceDiscount}</span>
          </>
        ) : (
          <span className="text-2xl text-dark-gray-2">{price}</span>
        )}
      </div>
      <p className="text-sm text-dark-gray-2">{description}</p>
      <div>{children}</div>
      <button className="mt-4 bg-warning text-white text-base px-4 py-2 rounded-md">
        Comprar
      </button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BuyBox.defaultProps = {
  priceDiscount: null,
};

export default BuyBox;
