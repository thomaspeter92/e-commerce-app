import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

function StarRating({ rating }) {
  const stars = Math.floor(rating);

  return (
    <div className="mb-3 flex items-center">
      {[...Array(5).keys()].map((x, i) => (
        <React.Fragment key={'star' + i}>
          <StarIcon
            className={`h-4 ${
              x + 1 <= stars ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        </React.Fragment>
      ))}
      <span className="text-xs text-green-900">
        ({Math.floor(Math.random() * 100)})
      </span>
    </div>
  );
}

export default StarRating;
