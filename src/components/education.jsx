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
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2 text-center">
                      <h5 className="title-left text-center">Education</h5>
                    </div>
                    <div className="education-content">
                      <div className="education-item mb-4">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="TUM" className="education-logo" />
                        </div>
                        <h4 className="text-center">Master's in Marketing & Computer Engineering</h4>
                        <h6 className="text-center">Technical University of Munich</h6>
                        <p className="education-date text-center">2017 - 2019</p>
                        <p className="education-description text-center">
                          Advanced studies combining marketing strategies with technical expertise in computer engineering.
                          Focused on digital marketing strategies, data analytics, and technology integration in marketing.
                        </p>
                      </div>
                      <div className="education-item mb-4">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="Istanbul University" className="education-logo" />
                        </div>
                        <h4 className="text-center">Bachelor's in Business Administration</h4>
                        <h6 className="text-center">Istanbul University</h6>
                        <p className="education-date text-center">2013 - 2017</p>
                        <p className="education-description text-center">
                          Foundation in business principles, management strategies, and organizational development.
                          Specialized in marketing and business operations with a focus on digital transformation.
                        </p>
                      </div>
                      <div className="education-item">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="Google" className="education-logo" />
                        </div>
                        <h4 className="text-center">Digital Marketing & Design Certification</h4>
                        <h6 className="text-center">Google Digital Academy</h6>
                        <p className="education-date text-center">2016</p>
                        <p className="education-description text-center">
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