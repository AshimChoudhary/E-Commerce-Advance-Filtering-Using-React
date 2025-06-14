import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recomended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './index.css';
import products from './db/data.jsx'; // ✅ CORRECT

import Card from './Components/Card';

function App() {
  const [storeQuery, setStoreQuery] = useState(null);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((products) =>
    products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  const handleChange = (e) => {
    setStoreQuery(e.target.value);
  };

  const handleButton = (e) => {
    setStoreQuery(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice }) => (
      <Card
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        key={Math.random()}
      />
    ));
  }

  const result = filteredData(products, storeQuery, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
