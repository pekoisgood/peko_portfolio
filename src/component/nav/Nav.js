import React from "react";
import "./nav.css";
import { AiTwotoneHome, AiFillContacts } from "react-icons/ai";
import { BsFillPersonFill, BsHddNetworkFill } from "react-icons/bs";
import { BiDockLeft } from "react-icons/bi";

const navList = [
  {
    icon: <AiTwotoneHome className="nav-icon" />,
    text: "Home",
    component: "Header",
  },

  {
    icon: <BsFillPersonFill className="nav-icon" />,
    text: "About Me",
    component: "About",
  },
  {
    icon: <BsHddNetworkFill className="nav-icon" />,
    text: "Skill",
    component: "Experience",
  },
  {
    icon: <BiDockLeft className="nav-icon" />,
    text: "Portfolio",
    component: "Portfolio",
  },
  {
    icon: <AiFillContacts className="nav-icon" />,
    text: "Contact",
    component: "Contact",
  },
];

function nav({ setActiveComponent }) {
  return (
    <nav id="nav-container">
      {navList.map((nav, index) => {
        return (
          <div
            key={index}
            className="nav-item"
            onClick={() => {
              setActiveComponent(nav.component);
            }}
          >
            {nav.icon}
            <p className="hide-text">{nav.text}</p>
          </div>
        );
      })}
    </nav>
  );
}

export default nav;
