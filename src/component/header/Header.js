import React, { useEffect, useRef } from "react";
import "./header.css";
import ME from "../../assets/peko.png";
import CV from "../../assets/CV_Peko_Front-End_Developer.pdf";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

function Header() {
  const [containerRef, isVisible] = useElementOnScreen({
    threashold: 0.5,
    reappear: true,
  });

  const avatar = useRef(null);
  const text = useRef(null);
  const buttons = useRef(null);
  const socials = useRef(null);

  const animatedText = (animation) => `hide ${isVisible && animation}`;

  return (
    <div className="sticky">
      <header id="header" className="section" ref={containerRef}>
        <div className="container-header">
          <div className="content-container">
            <div
              className={`img-container ${animatedText("appear_d1")}`}
              ref={avatar}
            >
              <img src={ME} alt="Peko" className="img-avatar" />
            </div>
            <div className="title" ref={text}>
              <span className={animatedText("slide")}>Hello, I'm</span>
              <h1 className={animatedText("slide")}>Peko Chuang</h1>
              <span className={animatedText("appear_d1")}>
                An outgoing, optimistic individual who embraces challenges, with
                a strong focus on software development and a dedication to
                achieving expertise.
              </span>
              <br />
              <span className={animatedText("appear_d1")}>
                "Stay Hungry, Stay Foolish." - <i>Steve Jobs</i>
              </span>
            </div>
          </div>
          <div className={`buttons ${animatedText("appear_d2")}`} ref={buttons}>
            <a className="btn" href={CV}>
              Download CV
            </a>
            <a className="btn" href="#contact">
              Let's talk
            </a>
          </div>
          <div className={`socials ${animatedText("appear_d2")}`} ref={socials}>
            <a href="https://www.facebook.com/profile.php?id=100002676016972">
              <BsFacebook />
            </a>
            <a href="https://github.com/pekoisgood">
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/peko-chuang-40a9b9267/">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
