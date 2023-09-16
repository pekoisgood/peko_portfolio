import "./index.css";
// import Header from "./component/header/Header";
// import Nav from "./component/nav/Nav";
// import About from "./component/about/About";
// import Experience from "./component/experience/Experience";
// import Portfolio from "./component/portfolio/Portfolio";
// import Contact from "./component/contact/Contact";
import { Suspense, lazy, useState } from "react";

const Header = lazy(() => import("./component/header/Header"));
const Nav = lazy(() => import("./component/nav/Nav"));
const About = lazy(() => import("./component/about/About"));
const Experience = lazy(() => import("./component/experience/Experience"));
const Portfolio = lazy(() => import("./component/portfolio/Portfolio"));
const Contact = lazy(() => import("./component/contact/Contact"));

function App() {
  const [activeComponent, setActiveComponent] = useState("Header");

  const list = {
    Header: <Header setActiveComponent={setActiveComponent} />,
    About: <About />,
    Experience: <Experience />,
    Portfolio: <Portfolio />,
    Contact: <Contact />,
  };

  const selectedComponent = (component) => {
    return list[component];
  };

  return (
    <div className="App">
      <Nav setActiveComponent={setActiveComponent} />
      <Suspense>{selectedComponent(activeComponent)}</Suspense>
    </div>
  );
}

export default App;
