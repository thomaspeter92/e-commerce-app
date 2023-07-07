import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {products.length > 0 && <Products products={products} />}
    </>
  );
}

export default App;
