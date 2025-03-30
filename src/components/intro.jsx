import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import aylinImage from "../img/aylin.png";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center" style={{ paddingTop: "100px" }}>
                  <img 
                    src={aylinImage} 
                    alt="Aylin Akseki" 
                    className="img-fluid mb-4"
                    style={{ 
                      maxWidth: "200px", 
                      margin: "0 auto",
                      borderRadius: "50%",
                      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                      marginTop: "60px"
                    }}
                  />
                  <h1 className="intro-title mb-4">Hello, I am Aylin Akseki</h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                      <Typed
                        strings={[
                          "a marketing specialist",
                          "a digital marketer",
                          "a social media marketer",
                          "a content designer"
                        ]}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                      />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
