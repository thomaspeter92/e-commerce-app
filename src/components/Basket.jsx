import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import { useCartStore } from '../stores/cartStore';
import Button from './Button';
import StarRating from './StarRating';

function Basket() {
  const [removeFromCart, clearCart, cart] = useCartStore((state) => [
    state.removeFromCart,
    state.clearCart,
    state.cart,
  ]);

  return (
    <div className="absolute border-green-900 border rounded top-full w-[40ch] right-1 p-5 bg-white shadow max-h-[500px] overflow-scroll">
      <div className="flex justify-between items-center border-b border-gray-300 py-2 mb-3">
        <p className="font-bold ">My Cart</p>
        <Button variant="secondary" onClick={clearCart}>
          Clear All
        </Button>
      </div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="flex gap-2 mb-2 items-center">
            {console.log(item)}
            <div className="w-16 h-16 p-2 bg-gray-200">
              <img
                className="w-full h-full object-contain"
                src={item.thumbnail}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm">{item.title}</p>
              <StarRating rating={item.rating} />
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="w-5 h-5 bg-gray-300 rounded-full p-1"
            >
              <XIcon />
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
    </div>
  );
}

export default Basket;
