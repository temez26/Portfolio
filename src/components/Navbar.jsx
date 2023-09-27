import React from 'react';

const Navbar = () => {
  return (

    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light pd-3">
      <div className="container">
      
      <section className="flex-start">
      <a id="title">Bonkkers</a>
      </section>
      <section className="flex-end">
      <a  className="right">Home</a>
      <a >Gallery</a>
      </section>
      
      </div>
    </nav>
    </header>
  );
};



export default Navbar;

