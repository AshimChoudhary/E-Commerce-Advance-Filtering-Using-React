import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <>
      <section className="sideBar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
