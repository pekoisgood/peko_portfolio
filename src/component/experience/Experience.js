import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

const frontendSkills = [
  { title: "Language", content: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  {
    title: "Framework",
    content: ["React", "Next.js"],
  },
  {
    title: "Library",
    content: [
      "Tailwind",
      <>
        Styled <br /> Components
      </>,
      "Bootstrap",
      "Redux",
    ],
  },
];

const backendSkills = [
  { title: "Language", content: ["Node.js", "Python", "SQLite"] },
  { title: "Framework", content: ["Express"] },
  {
    title: "Dev",
    content: [
      "Firebase",
      "Firestore",
      "Vercel",
      "Git",
      "GitHub",
      "ESLint",
      "Prettier",
    ],
  },
];

function Skill() {
  const [containerRef, isVisible] = useElementOnScreen({
    reappear: true,
  });

  const animationText = (animation) => `hide ${isVisible && animation}`;

  return (
    <div className="sticky" ref={containerRef}>
      <section id="experience" className="section">
        <p className={animationText("appear")}>Meet My Proficiencies</p>
        <h2 className={animationText("appear")}>Professional Skills</h2>
        <div className="skills-row">
          <div className={`container-skills ${animationText("slide_d1")}`}>
            <h3>Frontend Development</h3>
            <div className={`skills-list-container `}>
              {frontendSkills.map((skill, index) => {
                return (
                  <div className="skill" key={index}>
                    <p className="skill-title">{skill.title}</p>
                    {skill.content.map((item, index) => {
                      return (
                        <div key={index} className="skill-content">
                          <MdVerified />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`container-skills ${animationText("slide_d1")}`}>
            <h3>Backend Development</h3>
            <div className="skills-list-container">
              {backendSkills.map((skill, index) => {
                return (
                  <div className="skill" key={index}>
                    <p className="skill-title">{skill.title}</p>
                    {skill.content.map((item, index) => {
                      return (
                        <div key={index} className="skill-content">
                          <MdVerified />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
