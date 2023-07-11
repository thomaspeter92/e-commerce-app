import { CalendarIcon, TruckIcon } from '@heroicons/react/outline';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import QuantityButton from '../components/QuantityButton';
import StarRating from '../components/StarRating';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section className="flex flex-col sm:flex-row justify-center gap-10 px-10 pt-10">
      {Object.keys(product).length > 0 ? (
        <>
          <div className="flex-1">
            <div className="w-full h-[400px] bg-gray-100 p-5">
              <img
                className="w-full h-full object-contain"
                src={product.images[0]}
              />
            </div>
            <div className="flex w-full gap-5 items-start mt-5 flex-wrap sm:flex-nowrap">
              {product.images.length > 1
                ? product.images.map((img, i) => (
                    <div className="p-2 w-32 h-32 bg-gray-100">
                      <img src={img} className="object-contain w-full h-full" />
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="flex-1">
            <div className="max-w-[50ch]">
              <h1 className="font-bold text-3xl mb-3">{product.title}</h1>
              <p className="mb-3 text-gray-500">{product.description}</p>
              <p className="">
                <StarRating rating={product.rating} />
              </p>
              <hr className="my-5" />
              <div>
                <p className="font-bold text-3xl flex items-start">
                  <span className="text-sm">$</span>
                  {product.price.toLocaleString()}
                  <span className="text-sm">.00</span>
                </p>
                <p className="text-gray-500 text-xs mt-1 font-bold">
                  Offer expires soon! Hurry before it ends!
                </p>
                <p>{product?.discount}</p>
              </div>
              <hr className="my-5" />
              <div className="flex gap-5 items-center">
                <QuantityButton stock={product.stock} />
                <p className="text-sm text-gray-500">
                  Hurry up, only <br />
                  <span className="font-bold text-orange-500">
                    {product.stock}{' '}
                  </span>
                  left in stock!
                </p>
              </div>
              <div className="flex gap-5 flex-grow [&>*]:flex-1 mt-5">
                <Button>Buy now</Button>
                <Button variant="secondary">Add to cart</Button>
              </div>
            </div>
            <div className="border rounded border-gray-200 p-3 flex gap-3 my-5">
              <TruckIcon className="w-6 h-6 text-orange-500" />
              <div className="text-gray-700 ">
                <p className="font-bold">Free Delivery!</p>
                <p className="text-sm">
                  Enter your postcode to find the earliest time slot.
                </p>
              </div>
            </div>
            <div className="border rounded border-gray-200 p-3 flex gap-3">
              <CalendarIcon className="w-6 h-6 text-orange-500" />
              <div className="text-gray-700 ">
                <p className="font-bold">Return within 14 days!</p>
                <p className="text-sm">
                  Whatever the reason, you can return or exchange the product*
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Product;
