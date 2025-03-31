import React from "react";
import placeholderLogo from "../img/female.png";
import waltDisneyLogo from "../img/waltDisney.png";

class Experience extends React.Component {
  render() {
    return (
      <section id="experience" className="sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="experience-content">
                  <div className="title-box-2">
                    <h5 className="title-left">Experience</h5>
                  </div>
                  <div className="experience-items-container">
                    <div className="experience-item mb-4">
                      <div className="experience-header">
                        <div className="logo-container">
                          <img src={waltDisneyLogo} alt="Disney" className="company-logo" />
                        </div>
                        <div className="experience-title">
                          <h4>Digital Marketing Specialist</h4>
                          <h6>Walt Disney Company</h6>
                          <p className="experience-date">2023 - Present</p>
                        </div>
                      </div>
                      <div className="experience-details">
                        <p className="experience-description">
                          • Leading digital marketing initiatives and social media strategies<br />
                          • Creating engaging content and managing cross-platform campaigns<br />
                          • Developing and implementing comprehensive marketing strategies<br />
                          • Analyzing campaign performance and optimizing for better results
                        </p>
                      </div>
                    </div>

                    <div className="experience-item mb-4">
                      <div className="experience-header">
                        <div className="logo-container">
                          <img src={placeholderLogo} alt="Tech Startup" className="company-logo" />
                        </div>
                        <div className="experience-title">
                          <h4>Marketing Manager</h4>
                          <h6>Tech Startup</h6>
                          <p className="experience-date">2021 - 2023</p>
                        </div>
                      </div>
                      <div className="experience-details">
                        <p className="experience-description">
                          • Led marketing operations and brand development initiatives<br />
                          • Managed social media presence and content strategy<br />
                          • Developed and executed digital marketing campaigns<br />
                          • Increased user engagement by 150% through strategic planning
                        </p>
                      </div>
                    </div>

                    <div className="experience-item">
                      <div className="experience-header">
                        <div className="logo-container">
                          <img src={placeholderLogo} alt="Creative Agency" className="company-logo" />
                        </div>
                        <div className="experience-title">
                          <h4>Content Designer</h4>
                          <h6>Creative Agency</h6>
                          <p className="experience-date">2019 - 2021</p>
                        </div>
                      </div>
                      <div className="experience-details">
                        <p className="experience-description">
                          • Created compelling visual content for various digital platforms<br />
                          • Collaborated with clients to develop effective brand strategies<br />
                          • Managed multiple projects while maintaining high quality standards<br />
                          • Implemented automation solutions for content delivery
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

export default Experience;