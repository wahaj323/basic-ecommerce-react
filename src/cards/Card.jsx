import React from 'react';

const Card = ({ imageURL, name, price, description, onAddToCart, onBuyNow }) => {
  return (
    <div className="max-w-sm bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageURL} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Product Name and Price */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white truncate">{name}</h3>
          <span className="text-lg font-semibold text-emerald-400">${price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">{description}</p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={onAddToCart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
          >
            Add to Cart
          </button>
          <button 
            onClick={onBuyNow}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;