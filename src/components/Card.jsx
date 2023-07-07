import { StarIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import Button from './Button';
import Favorite from './Favorite';

function Card({ data }) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const rating = Math.floor(data.rating);
  const handleFavorite = () => {
    if (localStorage.getItem('favorite')) {
      let favorites = JSON.parse(localStorage.getItem('favorite'));

      if (favorites.includes(data.title)) {
        favorites = favorites.filter((item) => item !== data.title);
        setIsFavorite(false);
      } else {
        favorites.push(data.title);
        setIsFavorite(true);
      }
      localStorage.setItem('favorite', JSON.stringify(favorites));
    } else {
      localStorage.setItem('favorite', JSON.stringify([data.title]));
      setIsFavorite(true);
    }
  };

  const checkFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];

    if (favorites.includes(data.title)) {
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  return (
    <div className="h-[350px]">
      <div className="min-h-[175px] h-1/2 w-full relative bg-gray-100 py-3 px-8">
        <div className="absolute top-2 right-2">
          <Favorite favorite={isFavorite} onClick={handleFavorite} />
        </div>
        <img
          src={data.images[0]}
          alt={data.title}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="mt-2 flex flex-col justify-between items-start h-1/2">
        <div className="w-full">
          <p className="font-bold text-green-900 text-sm">{data.brand}</p>
          <h5 className=" text-gray-800 flex gap-2 font-medium justify-between items-start">
            {data.title}
            <span className="font-bold text-lg text-green-900">
              <span className="text-sm">$</span>
              {data.price}
            </span>
          </h5>
          <p className="text-xs text-gray-500 capitalize mb-2">
            {data.category}
          </p>
          <div className="mb-3 flex">
            {[...Array(5).keys()].map((x, i) => (
              <React.Fragment key={'star' + i}>
                <StarIcon
                  className={`h-4 ${
                    x + 1 <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}
export default Card;
