import cardImage from "../../image/R-LK3sqLiBw.png";
import rentalImage from "../../image/MP0bgaS_d1c.jpg";
import size from "../../image/keyboard-key-m 1.svg";
import room from "../../image/iconfinder_Movies_and_Entertainment_cinema_seat_theatre_sofa_6611449 1.svg";
import floor from "../../image/stairs-with-handrail 1.svg";
import "../../css/cards.css";
export const Card = ({ header, cards, image }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <h1 className="card-header-start">{header}</h1>
          <button>
            <a href="#">All</a>
          </button>
        </div>
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={image ? cardImage : rentalImage} alt="card" />
              </div>
              <div className="card-body">
                <div className="card-body-header">
                  <div className="card-body-header-price">{card.price}</div>
                  <div className="card-body-header-title">{card.title}</div>
                </div>
                <div className="card-body-location">{card.location}</div>
                <div className="card-body-date">{card.date}</div>
                <div className="card-body-icon">
                  <div className="card-body-room">
                    <img src={room} alt="" />
                    {card.room}
                  </div>
                  <div className="card-body-floor">
                    <img src={floor} alt="" />
                    {card.floor}
                  </div>
                  <div className="card-body-size">
                    <img src={size} alt="" />
                    {card.size}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
