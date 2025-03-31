import React from "react";
import placeholderLogo from "../img/female.png";

class Education extends React.Component {
  render() {
    return (
      <section id="education" className="sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="education-content">
                  <div className="title-box-2">
                    <h5 className="title-left">Education</h5>
                  </div>
                  <div className="education-items-container">
                    <div className="education-item mb-4">
                      <div className="education-header">
                        <div className="logo-container">
                          <img src={placeholderLogo} alt="TUM" className="education-logo" />
                        </div>
                        <div className="education-title">
                          <h4>Master's in Marketing & Computer Engineering</h4>
                          <h6>Technical University of Munich</h6>
                          <p className="education-date">2017 - 2019</p>
                        </div>
                      </div>
                      <div className="education-details">
                        <p className="education-description">
                          Advanced studies combining marketing strategies with technical expertise in computer engineering.
                          Focused on digital marketing strategies, data analytics, and technology integration in marketing.
                        </p>
                      </div>
                    </div>

                    <div className="education-item mb-4">
                      <div className="education-header">
                        <div className="logo-container">
                          <img src={placeholderLogo} alt="Istanbul University" className="education-logo" />
                        </div>
                        <div className="education-title">
                          <h4>Bachelor's in Business Administration</h4>
                          <h6>Istanbul University</h6>
                          <p className="education-date">2013 - 2017</p>
                        </div>
                      </div>
                      <div className="education-details">
                        <p className="education-description">
                          Foundation in business principles, management strategies, and organizational development.
                          Specialized in marketing and business operations with a focus on digital transformation.
                        </p>
                      </div>
                    </div>

                    <div className="education-item">
                      <div className="education-header">
                        <div className="logo-container">
                          <img src={placeholderLogo} alt="Google" className="education-logo" />
                        </div>
                        <div className="education-title">
                          <h4>Digital Marketing & Design Certification</h4>
                          <h6>Google Digital Academy</h6>
                          <p className="education-date">2016</p>
                        </div>
                      </div>
                      <div className="education-details">
                        <p className="education-description">
                          Specialized certification in digital marketing and design principles.
                          Mastered tools and techniques for creating effective digital marketing campaigns and visual content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;