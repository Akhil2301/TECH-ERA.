import React from "react";
import Title from "../../Common/Title/Title";
import "./Hero.css";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO TECH ERA.' title='50 Years of Teaching & Learning Legacy' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              obcaecati, laudantium distinctio ab, corporis quo corrupti maxime
              sunt nesciunt est saepe repellendus excepturi architecto a sint,
              non incidunt autem fugit.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW COURSE
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero;
