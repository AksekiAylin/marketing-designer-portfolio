import React from "react";

class WhatIDo extends React.Component {
  render() {
    return (
      <section id="what-i-do" className="sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2">
                      <h5 className="title-left">What I Do</h5>
                    </div>
                    <div className="what-i-do-content">
                      <div className="service-item">
                        <h4>Content Creation & Design</h4>
                        <p className="service-description">
                          Crafting engaging visuals and content that resonate with your audience:
                          <br /><br />
                          • Brand identity and visual design<br />
                          • Social media content creation<br />
                          • Marketing materials design<br />
                          • Photo and video editing
                        </p>
                      </div>

                      <div className="service-item">
                        <h4>Digital Marketing</h4>
                        <p className="service-description">
                          Comprehensive digital strategies for business growth:
                          <br /><br />
                          • SEO and website optimization<br />
                          • Email marketing campaigns<br />
                          • Social media advertising<br />
                          • Analytics and reporting
                        </p>
                      </div>

                      <div className="service-item">
                        <h4>Social Media Management</h4>
                        <p className="service-description">
                          Building and managing your social presence:
                          <br /><br />
                          • Content strategy and planning<br />
                          • Community engagement<br />
                          • Platform optimization<br />
                          • Performance tracking
                        </p>
                      </div>

                      <div className="service-item">
                        <h4>Creative Direction</h4>
                        <p className="service-description">
                          Leading creative initiatives and innovation:
                          <br /><br />
                          • Brand strategy development<br />
                          • Campaign conceptualization<br />
                          • Marketing automation<br />
                          • Team leadership
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

export default WhatIDo;