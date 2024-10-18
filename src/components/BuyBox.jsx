// src/components/BuyBox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import starIcon from "../assets/icons/star-icon.svg"; // Adjust path as necessary

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  productOptions,
}) => {
  return (
    <div className="p-4 border border-light-gray-2 rounded-lg" role="region" aria-labelledby="buybox-header">
      <h2 id="buybox-header" className="text-2xl text-dark-gray">{name}</h2>
      <p className="text-sm text-dark-gray-3">{reference}</p>
      
      <div className="flex items-center my-2">
        <span className="flex items-center bg-warning text-white text-sm px-2 py-1 rounded-md">
          {Array.from({ length: stars }, (_, i) => (
            <img key={i} src={starIcon} alt="Star" className="ml-1 w-3" />
          ))}
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

      <div className="my-4">
        {productOptions}
      </div>

      <div>{children}</div>

      <button 
        className="mt-4 bg-warning text-white text-base px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-warning" 
        onClick={() => alert(`Purchasing ${name}`)} // Example action
        aria-label={`Comprar ${name}`}
      >
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
  productOptions: PropTypes.node, // Expecting productOptions to be a node
};

BuyBox.defaultProps = {
  priceDiscount: null,
  productOptions: null,
};

export default BuyBox;
