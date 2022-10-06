import React from "react";
import "./Testimonial.css";

function Testimonial({img,name,text}) {
  return (
    <div className="Testimonial__container">
      <div>
        <img className="Testimonial__photo" src={img}></img>
        <h2 className="Testimonial__name">{name}</h2>
      </div>
      <div className="Testimonial__content">
        <p className="Testimonial__test">{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
