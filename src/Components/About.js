import React from "react";

import laptop from "./laptop.jpg";

function About(props) {
  const li = props.lightcolor;
  // eslint-disable-next-line
  const da = props.darkcolor;
  const darkmodecolor = "white";
  const lightmodecolor = "black";

  const func = () => {
    if (props.coll === li) {
      return lightmodecolor;
    } else {
      return darkmodecolor;
    }
  };

  return (
    <>
      <div className="container-fluid" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{ paddingTop: 130 }}>
              <img
                style={{ boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)" }}
                className="rounded-circle"
                src={laptop}
                alt="Logo"
                width={500}
                height={500}
              />
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-6" style={{ paddingTop: 160 }}>
              <div className="my-4">
                <h1 className="profession" style={{ color: "#7343b1" }}>
                  About Me
                </h1>
                {/*<h1 style={{ color: "#7f00fd" }}>Divya Hemnani</h1>*/}
                <p className="description my-4" style={{ color: func() }}>
                  Hi, I'm Divya Hemnani, a passionate React developer with a
                  love for creating intuitive and dynamic user experiences. My
                  journey in web development started with a curiosity for how
                  things work on the web, and it quickly evolved into a
                  full-fledged career. Over the past two years, I’ve had the
                  privilege of working with a variety of companies in which I
                  have delivered the required solution by developing the
                  front-end and by optimizing the app's performance."I’m always
                  excited to take on new challenges and collaborate with others.
                  Feel free to connect with me. Let’s build something
                  great together!"
                </p>
              </div>
              <div className="text-center my-4">
                <a
                  href="https://drive.google.com/file/d/1Pnq7CYQ8AWRcg6WBn-dMHTrIhgmvpp2S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="btn mx-3"
                    style={{ backgroundColor: "#7343b1", color: "white" }}
                  >
                    Resume
                  </button>
                </a>
              </div>

              <div className="my-3"></div>
              {/*<div>
                <button
                  type="button"
                  className="btn bg-transparent btn-primary"
                >
                  Read More
                </button>

                <button type="button" className="btn btn-primary mx-3">
                  Contact Me
                </button>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
