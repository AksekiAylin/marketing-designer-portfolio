import React from "react";

class Services extends React.Component {
  render() {
    return (
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">What I do?</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="service-box">
                <div className="service-content">
                  <h2 className="s-title">Content Creation</h2>
                  <p className="s-description">
                    I create engaging visuals-designs, photos, animations that connect with your audience and boost your brand's visibility online and offline. From custom logos and business cards to flyers, and digital designs, I've got your branding covered. Plus, I write blog articles, press releases, and case studies specific to your industry to drive traffic to get you noticed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-box">
                <div className="service-content">
                  <h2 className="s-title">Social Media Mgmt.</h2>
                  <p className="s-description">
                    I manage all your social media activities, capturing attention and keeps your audience hooked. By optimizing user journeys, creating contents, tracking KPIs, and staying ahead of trends, I deliver what works. From planning to scheduling posts across platforms, my goal is simple: boost engagement and make your brand unforgettable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-box">
                <div className="service-content">
                  <h2 className="s-title">Digital Marketing</h2>
                  <p className="s-description">
                    I offer a full range of digital marketing services to elevate your brand—SEO, website optimization, email marketing, influencer collaborations, and web analytics. I've also run impactful marketing campaigns and coordinated events that connect with audiences and deliver real impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-box">
                <div className="service-content">
                  <h2 className="s-title">Creative Direction & Automation</h2>
                  <p className="s-description">
                    I turn ideas into creative solutions that deliver results. From marketing automation to AI-driven strategies and personalized experiences, I help your business stay ahead and connect with your audience in smarter, more meaningful ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services; 