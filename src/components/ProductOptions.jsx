// src/components/ProductOptions.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex gap-2">
      {options.map((option, index) => {
        const isOptionSelected = selectedOption === option;

        const baseClasses = `flex justify-center items-center cursor-pointer transition duration-200 ${
          isOptionSelected ? 'border-primary border-2' : 'border-light-gray-2 border'
        }`;

        if (shape === 'square') {
          return (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`${baseClasses} h-11 px-3 rounded-${radius} text-2xl ${
                type === 'color' ? '' : 'text-dark-gray-2'
              } ${type === 'color' ? `bg-[${option}]` : ''}`}
            >
              {type === 'text' ? option : null}
            </div>
          );
        }

        if (shape === 'circle') {
          return (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`${baseClasses} w-8 h-8 rounded-full ${
                type === 'color' ? `bg-[${option}]` : ''
              }`}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
};

ProductOptions.defaultProps = {
  radius: '0',
};

export default ProductOptions;
