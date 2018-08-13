import React from 'react';

const Examples = () => {
  return (
  <section className="examples-section">
    <div className="examples">
      <div className="examples__items examples__item--1">
        <img className="examples__image" src={require("../img/1.png")} alt="1"/>
        <div className="examples__info">
          <h4 className="examples__title">Regional Cuisine down home southern cooking</h4>
          <p className="examples__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quaerat quisquam dicta, maxime voluptatum deserunt.</p>
        </div>
      </div>
      <div className="examples__items examples__item--2">
        <img className="examples__image" src={require("../img/2.png")} alt="2"/>
        <div className="examples__info">
          <h4 className="examples__title">Pos hardware more options in less space</h4>
          <p className="examples__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quaerat quisquam dicta, maxime voluptatum deserunt..</p>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Examples;