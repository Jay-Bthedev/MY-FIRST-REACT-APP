import React from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";
const CardComponent = (props) => {
  return (
    <div className="class-component-body">
      <img
        src={props.img}
        alt="user headshot"
      />
      <div className="card-content">
              <h3>{props.name}</h3>
              <p>{ props.description}</p>
              <button>
                  <Link to={props.link}>
                        Visit my profile
                  </Link>
                  
              
              </button>
      </div>
    </div>
  );
};

export default CardComponent;