import React from "react";
import CardsElements from "./CardsElements";

const TestCards = () => {
  return (
    <>
      {CardsElements.map((elem) => {
        let { id, image, title } = elem;
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-5">
                <div className="card" style={{ width: 100 }}>
                  <img className="card-img-top" src={image} alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TestCards;
