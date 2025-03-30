import React from "react";
import myImage from "../img/aylin.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "UI_skill", content: "UI Design", porcentage: "95%", value: "95" },
        { id: "UX_skill", content: "UX Design", porcentage: "90%", value: "90" },
        { id: "Marketing_skill", content: "Marketing Strategy", porcentage: "85%", value: "85" },
        { id: "Branding_skill", content: "Branding", porcentage: "90%", value: "90" },
        { id: "Adobe_skill", content: "Adobe Creative Suite", porcentage: "95%", value: "95" },
        { id: "Figma_skill", content: "Figma", porcentage: "90%", value: "90" },
        { id: "Social_skill", content: "Social Media Marketing", porcentage: "85%", value: "85" },
        { id: "Content_skill", content: "Content Strategy", porcentage: "90%", value: "90" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a passionate Marketing Designer with a keen eye for creating compelling visual experiences. With expertise in UI/UX design and brand strategy, I help businesses connect with their audience through innovative and effective design solutions."
        },
        {
          id: "second-p-about",
          content:
            "My approach combines creative design thinking with data-driven marketing strategies to deliver results that not only look great but also drive business growth. I specialize in creating user-centered designs that enhance brand engagement and customer experience."
        },
        {
          id: "third-p-about",
          content:
            "With years of experience in the industry, I've worked with diverse clients across various sectors, helping them establish strong brand identities and create memorable marketing campaigns that resonate with their target audience."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt="Aylin Akseki"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
