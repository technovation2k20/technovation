import React from "react";

import "./About.css";
import "../../assets/fonts/flaticon.css";
import logo from "../../assets/images/logo.png";

const About = (props) => {
  return (
    <div id="container">
      <div className="card-link">
        <article className="blog-card">
          <img
            className="post-image"
            src="http://www.iert.ac.in/img/ie.png"
            alt="iert-map"
          />
          <div className="article-details">
            <h3 className="post-title">
              Institute of Engineering and Rural Technology
            </h3>
            <p className="post-description">
              26, Chatham line , Prayagraj, Uttar Pradesh, India - 211002
              <br />
              Phone & Fax: (+91)-0532-2544810 <br />
              (+91)-9956640825 (Assistant Registrar)
              <br />
              College id: mailedd@iert.ac.in
            </p>
            <a className="post-author" href="http://www.iert.ac.in/">
              http://www.iert.ac.in/
            </a>
          </div>
        </article>
      </div>
      <div className="card-link" href="#">
        <article className="blog-card">
          <img
            className="post-image"
            src={logo}
            alt="logo"
            style={{ backgroundColor: "#000" }}
          />
          <div className="article-details">
            <h3 className="post-title">Technovation</h3>
            <p className="post-description">
              Technology and Science have seen phenomenal progress in the 21st
              century with people working around the clock to innovate ideas to
              make this world a better place to live in. Amidst such monotonous
              phase in everyone's life IERTians have taken this initiative to
              conduct its most awaited event in a Brand New Avatar!
            </p>
            <a className="post-author" href="https://iert-technovation.in/">
              https://iert-technovation.in/
            </a>
          </div>
        </article>
      </div>
      <footer className="footer footer-big footer-transparent">
        <div className="container">
          <div className="row">
            <h5>Join us on</h5>
            <div className="social-area text-center">
              <a
                href="https://www.facebook.com/2k20technovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social btn-round"
              >
                <i className="flaticon-facebook"></i>
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social btn-round"
              >
                <i className="flaticon-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/technovation.2k20/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social btn-round"
              >
                <i className="flaticon-instagram"></i>
              </a>
              <a
                href="https://www.messenger.com/t/2k20technovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social btn-round"
              >
                <i className="flaticon-messenger"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/ED5D3vm6Zi2HPoMpmc3Awa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social btn-round"
              >
                <i className="flaticon-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
