import React from "react";
import $ from "jquery";

import logo from "../img/female.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo,
      showLogo: false,
      activeSection: "home"
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      const body = $("body");
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
      body.toggleClass("menu-open");
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
      $("body").removeClass("menu-open");
    });

    // Handle scroll events
    window.addEventListener("scroll", () => {
      // Update navbar background
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ showLogo: true });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ showLogo: false });
      }

      // Update active section
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'what-i-do', 'contact'];
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      this.setState({ activeSection: currentSection });
    });

    // Close menu when clicking outside
    $(document).on("click", function(e) {
      if (!$(e.target).closest(".navbar").length) {
        $(".navbar-collapse").collapse("hide");
        $("body").removeClass("menu-open");
      }
    });

    // Smooth scroll
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a 
            className="navbar-brand js-scroll" 
            href="#page-top"
            style={{ opacity: this.state.showLogo ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'home' ? 'active' : ''}`} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'about' ? 'active' : ''}`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'education' ? 'active' : ''}`} href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'experience' ? 'active' : ''}`} href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'projects' ? 'active' : ''}`} href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'what-i-do' ? 'active' : ''}`} href="#what-i-do">
                  What I Do
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link js-scroll ${this.state.activeSection === 'contact' ? 'active' : ''}`} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
