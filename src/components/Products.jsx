import { XIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Products({ products }) {
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategories]);

  const handleSelectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="px-10 mt-5">
      <h2 className="text-center text-lg font-bold text-green-900">
        Choose a Category:
      </h2>
      <div className="flex items-center gap-3 mt-5 mb-10 flex-wrap justify-center">
        {categories.map((category, i) => (
          <button
            onClick={() => handleSelectCategory(category)}
            key={category + i}
            className={`relative py-2 px-3 capitalize  text-sm rounded-full border-2 ${
              selectedCategories.includes(category)
                ? 'bg-green-900 text-white border-green-900'
                : 'bg-gray-200 border-gray-200'
            } bg-gray-200 text-gray-700 font-bold hover:border-green-900`}
          >
            {selectedCategories.includes(category) && (
              <XIcon className="absolute h-5 bg-green-900 rounded-full text-white p-1 right-0 top-0 translate-x-1/3 -translate-y-1/2" />
            )}
            {category}
          </button>
        ))}
      </div>
      <hr />
      <section className="flex flex-wrap  gap-[30px] gap-y-16 mt-10  justify-center">
        {filteredProducts.map((product, i) => (
          <div key={product.title + i} className="min-w-[200px] w-[20%]">
            <Card data={product} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
