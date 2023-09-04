import React, { useEffect } from "react";
import "./about.css";
import ME2 from "../../assets/peko.jpg";
import { IoMdSchool } from "react-icons/io";
import { GrCertificate, GrUserExpert } from "react-icons/gr";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

const aboutList = [
  {
    title: "Education",
    icon: <IoMdSchool />,
    li: ["Chung Gung University"],
  },
  {
    title: "Certificate",
    icon: <GrCertificate />,
    li: ["TOEIC: 840 points", "Respiratory Therapist"],
  },
  {
    title: "Experience",
    icon: <GrUserExpert />,
    li: [
      `AppWorks School / Front-End Developer
    2023.03 - 2023.08`,
    ],
  },
];

function About() {
  const [containerRef, isVisible] = useElementOnScreen({
    reappear: true,
  });

  const animationText = (animation) => `hide ${isVisible && animation}`;

  return (
    <div className="sticky">
      <section id="about" className="section" ref={containerRef}>
        <p className={animationText("appear")}>Get to know me</p>
        <h2 className={animationText("appear")}>ABOUT</h2>
        <div className="container-about">
          <div className={`about-img ${animationText("appear_d1")}`}>
            <img src={ME2} width="300px" alt="Peko" />
          </div>
          <div className={`card-container ${animationText("appear_d1")}`}>
            {aboutList.map((item, index) => {
              return (
                <div className={`card`} key={index}>
                  {item.icon}
                  <p className="card-title">{item.title}</p>
                  <ul className="list">
                    {item.li.map((li) => {
                      return <li>{li}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className={`about-self-intro ${animationText("appear_d2")}`}>
          Peko here, a passionate aspiring software engineer who graduated from
          Chang Gung University in 2022. I've expanded my skill set through
          Coursera courses, covering Python for Everybody Specialization,
          Version Control, HTML and CSS in depth, Programming with JavaScript,
          and React Basics. Equipped with strong communication skills, I thrive
          in collaborative settings and am eager to work with others. My
          experience as the vice director of the Respiratory Therapy Students'
          Association has honed my essential teamwork skills, vital for patient
          care during hospital internships. Additionally, I've dedicated 80
          hours per week at the AppWorks School coding bootcamp, where I've
          completed projects including an e-commerce website, collaborative
          ventures, and personal portfolio websites.
        </p>
      </section>
    </div>
  );
}

export default About;
