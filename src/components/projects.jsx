import React from "react";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import tip from "../img/projects/profile.jpeg";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          title: "Disney+ Campaign",
          description: "Led the digital marketing campaign for Disney+ streaming service launch in Europe. Developed and executed comprehensive social media strategy, resulting in 50% increase in subscriber engagement.",
          images: [image1, image2],
          skills: ["Digital Marketing", "Social Media", "Content Strategy", "Analytics"]
        },
        {
          id: 2,
          title: "Tech Startup Rebranding",
          description: "Complete rebranding project for a growing tech startup. Created new brand identity, marketing materials, and digital presence strategy that increased brand recognition by 200%.",
          images: [image3, image4, image5, tip],
          skills: ["Branding", "UI/UX Design", "Marketing Strategy", "Visual Design"]
        },
        {
          id: 3,
          title: "Social Media Automation",
          description: "Implemented automated social media marketing solution for a retail chain. Developed content calendar and automation workflows that improved posting consistency and engagement.",
          images: [image5],
          skills: ["Automation", "Social Media", "Content Creation", "Analytics"]
        },
        {
          id: 4,
          title: "Marketing Campaign",
          description: "Built comprehensive analytics dashboard for marketing campaigns. Integrated multiple data sources to provide real-time insights and ROI tracking.",
          images: [image6, image1],
          skills: ["Data Analytics", "Marketing", "Visualization", "Strategy"]
        }
      ]
    };
  }

  render() {
    return (
      <section id="projects" className="sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="title-box-2">
                  <h5 className="title-left">Projects</h5>
                </div>
                <div className="project-container">
                  {this.state.projects.map(project => (
                    <div className="project-card" key={project.id}>
                      <div className="project-images">
                        {project.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="project-image"
                          />
                        ))}
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-skills">
                        {project.skills.map((skill, index) => (
                          <span key={index} className="project-skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;