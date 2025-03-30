import React from "react";
import placeholderLogo from "../img/female.png";

class Experience extends React.Component {
  render() {
    return (
      <section id="experience" className="sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2 text-center">
                      <h5 className="title-left text-center">Experience</h5>
                    </div>
                    <div className="experience-content">
                      <div className="experience-item mb-4">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="Disney" className="company-logo" />
                        </div>
                        <h4 className="text-center">Digital Marketing Specialist</h4>
                        <h6 className="text-center">Walt Disney Company</h6>
                        <p className="experience-date text-center">2023 - Present</p>
                        <p className="experience-description text-center">
                          • Leading digital marketing initiatives and social media strategies<br />
                          • Creating engaging content and managing cross-platform campaigns<br />
                          • Developing and implementing comprehensive marketing strategies<br />
                          • Analyzing campaign performance and optimizing for better results
                        </p>
                      </div>
                      <div className="experience-item mb-4">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="Tech Startup" className="company-logo" />
                        </div>
                        <h4 className="text-center">Marketing Manager</h4>
                        <h6 className="text-center">Tech Startup</h6>
                        <p className="experience-date text-center">2021 - 2023</p>
                        <p className="experience-description text-center">
                          • Led marketing operations and brand development initiatives<br />
                          • Managed social media presence and content strategy<br />
                          • Developed and executed digital marketing campaigns<br />
                          • Increased user engagement by 150% through strategic planning
                        </p>
                      </div>
                      <div className="experience-item">
                        <div className="text-center mb-3">
                          <img src={placeholderLogo} alt="Creative Agency" className="company-logo" />
                        </div>
                        <h4 className="text-center">Content Designer</h4>
                        <h6 className="text-center">Creative Agency</h6>
                        <p className="experience-date text-center">2019 - 2021</p>
                        <p className="experience-description text-center">
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