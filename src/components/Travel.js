import React from 'react';

const Travel = () => {
  return (
    <section className="travel-section">
      <div className="travel">
        <h3 className="travel__header">Maui by air the best way around the island</h3>
        <div className="travel__items">
          <div className="travel__item">
            <img src={require("../img/3.png")} alt="" className="travel__image" />
            <h5 className="travel__name">East Josianefurt</h5>
            <div className="travel__caption">085 Daron Via</div>
          </div>
          <div className="travel__item">
            <img src={require("../img/4.png")} alt="" className="travel__image" />
            <h5 className="travel__name">South Cristopherport</h5>
            <div className="travel__caption">162 Chandler Ville</div>
          </div>
          <div className="travel__item">
            <img src={require("../img/5.png")} alt="" className="travel__image" />
            <h5 className="travel__name">Concepcionbury</h5>
            <div className="travel__caption">7643 Kylie Burgs</div>
          </div>
          <div className="travel__item">
            <img src={require("../img/6.png")} alt="" className="travel__image" />
            <h5 className="travel__name">Reychester</h5>
            <div className="travel__caption">5590 Gabe Views Apt. 044</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Travel;