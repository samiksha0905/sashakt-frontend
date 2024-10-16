import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <section className="top-pd-main about-section-two" id="about-us-head"></section>
      <div className="auto-container">
        <div className="row home-content">
          <div className="text-center">
            <h1 className="title-03">About Us</h1>
          </div>
          <div className="col-lg-6 col-md-12 order-2 wow fadeInRight animated" data-wow-delay="600ms">
            <div className="inner-column">
              <div className="inner-column wow fadeInLeft animated">
                <figure className="image mob-disp overlay-anim wow fadeInUp animated">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.LfLzHB1a4pesrTf9-4fX2QHaE3&pid=Api&P=0&h=180"
                    width="350"
                    height="350"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="inner-column lef-pd wow fadeInLeft animated">
              <div className="left-text-p-01">
                <p>
                "Sashakt, we believe in nurturing the limitless potential within every child. Our mission is to inspire and empower young minds to dream big, believe in themselves, and take confident strides toward their goals. Through a variety of engaging and educational programs, we foster a positive and inclusive environment where children can develop essential life skills, discover their unique talents, and build the self-confidence needed to navigate the world with resilience and determination."
                </p>
                <p>
                "Our platform is committed to providing accessible resources, mentorship, and opportunities that equip children with the tools they need to become compassionate leaders and responsible global citizens. Through collaborative initiatives, interactive workshops, and uplifting stories of young change-makers, we inspire children to recognize their potential as catalysts for positive change
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
