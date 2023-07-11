import React from 'react';

function QuantityButton({ stock }) {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="rounded-full bg-gray-200 text-gray-600 flex items-center gap-8 py-2 px-8">
      <button
        className="text-lg"
        onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
      >
        -
      </button>
      <p className="w-[2ch] text-center font-bold">{quantity}</p>
      <button
        className="text-lg"
        onClick={() => (quantity < stock ? setQuantity(quantity + 1) : null)}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
