import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
// import { GiFrozenRing } from "react-icons/gi";
import meImg from "../../../assets/me.svg";
// import ghostImg from "../../../assets/ghost.svg";

import "./aboutSite.css";

const AboutSite = () => {
  return (
    <div className="ruby-blog__about-site__container">
      <div className="ruby-blog__about-site__container__short-info">
        <div className="ruby-blog__about-site__container__short-info__head-div">
          <h2>- About Samson Sanyaolu - </h2>
          <p>About me and my Blog site</p>
        </div>
        <div className="ruby-blog__about-site__container__short-info__para-div">
          <p>
          I have the right blend of design thinking and industry skills needed to build technological ( solutions based ) on digital design and development to solve problems.
          I am passionate about creating responsive user experiences and websites to help organizations sustain seamless ( web presence, solve problems, optimize processes ) and make better business decisions.
          </p>
          <p>
            Coming to the coding, the first, ( & proud feel ) thing is-site is
            built using pure CSS. No extra things for CSS layout are used. Of
            course, it's REACT. The hype & my Weapon till now. Few npm packages
            are in use, including, react-markdown for rendering markdown files.
            A good thing is, I managed to do this site in less mess. Reusable
            components, you know. The bad thing is, it's just Frontend only.
            This means the data is hardcoded. To see more articles in the
            future, I have to add them manually. Blah
            </p>
            <p style={{ textAlign: "center" }}>
            Maybe in the future, it will either have its backend from scratch or
            service from the CMS platform. Let us see what the future has in its
            store for the 💎 site. <br /> ( Me actually )
          </p>
        </div>
      </div>
      <div className="ruby-blog__about-site__container__credits">
        <div className="ruby-blog__about-site__container__credits__programmer-div">
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div">
            <img src={meImg} alt="programmer_img" />
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__headinfo">
            <h2>Samson Sanyaolu</h2>
            <p>Programmer behind the Sosamson Blog</p>
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__parainfo">
            <p>
            Award winning Google certified Web Developer and UI/UX Designer - Innovative Tech Trainer, transforming brands with stunning web solutions that drives visibility and revenue growth.
            Currently exploring the Web Development area with MERN as a guide.
            In my spare time, I think ( or Overthink ).
            </p>
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__social">
            <a
              href="https://github.com/sosamsony"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__social-github">
                <DiGithubAlt />
              </div>
            </a>
            <a
              href="https://www.instagram.com/sosamsony/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__social-instagram">
                <AiOutlineInstagram />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/sosamsony"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__social-github">
                <AiOutlineLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
