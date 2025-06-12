import './Recommended.css';

import React from 'react';

function Recommended() {
  return (
    <>
      <h2>Recommended</h2>
      <div className="recommended-btns">
        <button className="btns"> All Products</button>

        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Onisuka Tiger</button>
      </div>
    </>
  );
}

export default Recommended;
