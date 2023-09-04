import "./index.css";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import { useState } from "react";

const list = {
  Header: <Header />,
  About: <About />,
  Experience: <Experience />,
  Portfolio: <Portfolio />,
  Contact: <Contact />,
};

function App() {
  const [activeComponent, setActiveComponent] = useState("Header");

  const selectedComponent = (component) => {
    return list[component];
  };

  return (
    <div className="App">
      <Nav setActiveComponent={setActiveComponent} />
      {selectedComponent(activeComponent)}
    </div>
  );
}

export default App;
