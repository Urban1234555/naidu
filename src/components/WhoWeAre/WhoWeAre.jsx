import React from "react";
import img01 from "../../assets/img/images/about.jpeg";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  const openWhatsapp=() => {
    const msg = 'I want an ID'
    const url = `https://wa.me/919713497134?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank')
  } 
  return (
    
    <section id="about" className="about-area  pb-130">

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <a className="btn text-center mb-10" onClick={openWhatsapp}>
               <i className="fab fa-whatsapp"></i> Whatsapp Now
              </a>
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
            <a onClick={openWhatsapp}><img src={img01} alt="" /></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight text-center" data-wow-delay=".2s">
              <div className="section-title mb-30 text-center">
                <span className="sub-title text-center">Join Us Now</span>
                <h2 className="title text-center">
                  Naidu Babu <span>is now</span> live in INDIA!!!
                </h2>
              </div>
              <a className="btn text-center" onClick={openWhatsapp}>
               <i className="fab fa-whatsapp"></i> Whatsapp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
