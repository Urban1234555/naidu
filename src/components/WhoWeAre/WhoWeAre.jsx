import React from "react";
import img01 from "../../assets/img/images/about.jpg";
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

      <div className="container mb-130">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
            <a onClick={openWhatsapp}><img src={img01} alt="" /></a>
            </div>
            <a className="btn text-center" onClick={openWhatsapp}>
               <i className="fab fa-whatsapp"></i> GET ID NOW
              </a>
          </div>
        </div>
      </div>
      <span class="text1">
        Disclaimer:- This Website is only for 18+ users. Please Leave This Site If you are from Telangana, Orissa, Assam, Sikkim, and Nagaland. Beware of fraudsters, we only deal via WhatsApp. We only promote online fantasy sports, with absolutely no opportunity to win anything of value, such as prizes and money.
    </span>
    </section>
    
  );
};

export default WhoWeAre;
