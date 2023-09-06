import React from "react";
import blueBuilding from "../../image/blue bulding.jpg";
import navigation from "../../image/navigation .jpg";
import thirdimg from "../../image/3_1f0ZGOjIY.png";
import "../../css/info.css";
export const Buildingcard = () => {
  return (
    <>
      <div className="container">
        <div className="containerBuildings">
          <div className="building-right">
            <h2>Search Your Dream House On The Map</h2>
            <p>
              Find the house you are looking for easily according to location
              information.
            </p>
            <button className="search-button">
              <a href="#">Search On Map</a>
            </button>
          </div>
          <div className="building-left">
            <img src={navigation} alt="navigation-image" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerBuildings">
          <div className="building-right">
            <h2>Life Valley Project</h2>
            <p>
              The privileged location in Lambeth region in the west of London
              city.
            </p>
            <p>
              The project is close to many hotels, hospitals and commercial
              centers...
            </p>
            <button className="view-button">
              <a href="#">View Project</a>
            </button>
          </div>
          <div className="building-left">
            <img src={blueBuilding} alt="navigation-image" />
          </div>
        </div>
      </div>
      <div className="third-fourth-cards">
        <div className="third-card">
          <div className="third-right">
            <h2>Life Valley Project</h2>
            <p>
              The privileged location in Lambeth region in the west of London
              city.
            </p>
            <p>
              The project is close to many hotels, hospitals and commercial
              centers...
            </p>
            <button className="third-card-button">
              <a href="#">View Project</a>
            </button>
          </div>
          <div className="third-card-img">
            <img src={thirdimg} alt="navigation-image" />
          </div>
        </div>
        <div className="third-card">
          <div className="third-right">
            <h2>Life Valley Project</h2>
            <p>
              The privileged location in Lambeth region in the west of London
              city.
            </p>
            <p>
              The project is close to many hotels, hospitals and commercial
              centers...
            </p>
            <button className="third-card-button">
              <a href="#">View Project</a>
            </button>
          </div>
          <div className="third-card-img">
            <img src={thirdimg} alt="navigation-image" />
          </div>
        </div>

        
      </div>
    </>
  );
};
