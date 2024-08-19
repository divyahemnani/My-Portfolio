import React, { useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ContactForm from "./Components/ContactForm";
import CustomTimeLine from "./Components/My-journey/CustomTimeLine";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Resume from "./Components/Resume";

//import TestResume from "./Components/TestResume";
//import ContactBlock from "./Components/ContactBlock";

function App() {
  const li = "#f1f5f9";
  const da = "#1B2430";

  const [color, setColor] = useState(li);

  const click = () => {
    if (color === li) {
      setColor(da);
    } else {
      setColor(li);
    }
  };

  document.body.style.backgroundColor = color;

  return (
    <>
      <Router>
        <NavBar lightcolor={li} darkcolor={da} coll={color} showcolor={click} />
        <Routes>
          <Route
            path="/"
            element={<Home lightcolor={li} darkcolor={da} coll={color} />}
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/journey"
            element={
              <CustomTimeLine lightcolor={li} darkcolor={da} coll={color} />
            }
          />
          <Route path="/skills" element={<Cards />} />
          <Route
            path="/about"
            element={<About lightcolor={li} darkcolor={da} coll={color} />}
          />
          <Route path="/resume" element={<Resume />} />

          {/*<Home lightcolor={li} darkcolor={da} coll={color} />*/}
          {/*<ContactBlock />*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
